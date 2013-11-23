<?php

require_once 'Connection.php';

abstract class Base {

    protected $id = null;
    protected $database = null;
    protected $table = null;

    public function __construct(array $options=null, \PDO $database = null) {
        if (count($options))
            $this->setOptions($options);

        $this->config['adapter'] = "mysql";
        $this->config['hostname'] = "localhost";
        $this->config['dbname'] = "mydb";
        $this->config['user'] = "admin";
        $this->config['password'] = "admin";

        $connection = new Connection();

        $this->database = $connection->getConnection($this->config);

        if (method_exists($this, $_GET['action'])) {
            call_user_func(array($this, $_GET['action']));
        }
    }

    public function setOptions(array $options) {
        $methods = get_class_methods($this);
        foreach ($options as $key => $value) {
            $method = 'set' . ucfirst($key);
            if (in_array($method, $methods))
                $this->$method($value);
        }
        return $this;
    }

    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        if (!is_null($this->id))
            throw new \Exception('ID nao pode ser alterado');
        $this->id = (int) $id;
    }

    public function getTable() {
        return $this->table;
    }

    public function getDb() {
        return $this->database;
    }

    public function save() {
        if ($this->id)
            return $this->_update();
        else
            return $this->_insert();
    }

    public function find($id) {
        $db = $this->getDb();
        $stm = $db->prepare("select * from " . $this->getTable() . ' where id=:id');
        $stm->bindValue(':id', $id);
        $stm->execute();
        return $stm->fetch(\PDO::FETCH_ASSOC);
    }

    public function fetchAll() {
		$start = $_POST['start'];
        $limit = $_POST['limit'];

        //$sort = $_POST['sort'] ? $_POST['sort'] : 'name';
        //$dir = $_POST['dir']? $_POST['dir'] : 'ASC';
        //$order = $sort . ' ' . $dir;
        
        $db = $this->getDb();
        
        $sql = "select * from " . $this->getTable() . " order by :order";
        
        if($start !== null && $start !== '' && $limit !== null && $limit !== ''){
            $sql .= " LIMIT " . $start . " , " . $limit;
        }
        
        $stm = $db->prepare($sql);
        $stm->bindValue(":order", null);
        $stm->execute();
        
        $sql = "SELECT COUNT(*) AS total FROM " . $this->getTable();
        $total = $db->query($sql)->fetch();

        echo json_encode(array(
            "data" => $stm->fetchAll(\PDO::FETCH_ASSOC),
            "success" => true,
            "total" => $total['total']
        ));
    }

    public function delete() {

        $arrEvent = json_decode($_POST['data']);

        if (is_array($arrEvent)) {

            foreach ($arrEvent as $event) {

                $id = $event->id;

                $db = $this->getDb();
                $stm = $db->prepare("delete from " . $this->table . " where id=:id");
                $stm->bindValue(":id", $id);
                $eventExlude = $stm->execute();

                if (!$eventExclude)
                    break;
            }
        }else {

            $id = $arrEvent->id;

            $db = $this->getDb();
            $stm = $db->prepare("delete from " . $this->table . " where id=:id");
            $stm->bindValue(":id", $id);
            $eventExclude = $stm->execute();
        }

        $msg = $eventExclude ? 'Record (s) deleted (s) successfully' : 'Error deleting, try again.';

        echo json_encode(array(
            "success" => $eventExclude,
            "message" => $msg
        ));
    }
}