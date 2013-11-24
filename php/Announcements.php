<?php

require_once 'Db/Base.php';

class Announcements extends Base {

    private     $value = null;
    private     $data = null;
    protected   $table = "Announcements";
    
    public function insert() {
        
        $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        $stm = $db->prepare('Insert into Announcements (User_idUser, Description) VALUES (:User_idUser, :Description)');
        $stm->bindValue(':User_idUser', $data->User_idUser);
        $stm->bindValue(':Description', $data->Description);
        $stm->execute();

        $result = $stm->fetch(\PDO::FETCH_ASSOC);

        $insert = $db->lastInsertId();
        
        $msg = $insert ? 'Record (s) inserted (s) successfully' : 'Error inserting record, try again.';
        
        $newData = $data;
        $newData->idAnnouncements = $insert;

        echo json_encode(array(
            "success" => $insert,
            "message" => $msg,
            "data" => $newData
        ));
    }

    public function update() {
        
        $data = json_decode($_POST['data']);
        
        $db = $this->getDb();
        $stm = $db->prepare('update ' . $this->getTable() . ' set nome=:nome, email=:email where id=:id');
        $stm->bindValue(':id', $data->id);
        $stm->bindValue(':nome', $data->nome);
        $stm->bindValue(':email', $data->email);
        $update = $stm->execute();
        
        $msg = $update ? 'Registro(s) atualizado(s) com sucesso' : 'Erro ao atualizar, tente novamente.';
        
        echo json_encode(array(
            "success" => $update,
            "message" => $msg,
            "data" => $data
        ));
    }
}

new Announcements();