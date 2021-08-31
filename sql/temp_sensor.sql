CREATE TABLE tempSensorB (
    tempSensor_id int(11) NOT NULL AUTO_INCREMENT,
    tempSensor_value varchar(255) NOT NULL,
    tempSensor_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (tempSensor_id) ) ENGINE=InnoDB;



