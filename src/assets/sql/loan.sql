CREATE TABLE LOAN
(
  CODE_LOAN     VARCHAR(20)              NOT NULL,
  CODE_USER     VARCHAR(20)              NOT NULL,
  PRENOM        VARCHAR(40)              NOT NULL,
  NOM           VARCHAR(40)              NOT NULL,
  ADRESSE       VARCHAR(40)              NOT NULL,
  VILLE         VARCHAR(40),
  PROVINCE      VARCHAR(40),
  ZIP           VARCHAR(10),
  NOMBRE_ENFANT VARCHAR(10),
  SITUATION_PATRIMONIALE VARCHAR(40)    NOT NULL,
  PROFESSION VARCHAR(40)    NOT NULL,
  SECTEUR VARCHAR(40)    NOT NULL,
  REVENU_MENSUEL VARCHAR(40)    NOT NULL,
  DATE_CREATION   VARCHAR(40),
  APPROUVE  VARCHAR(40),
  MONTANT VARCHAR(40) NOT NULL
);


ALTER TABLE LOAN ADD 
  PRIMARY KEY
  (CODE_LOAN);