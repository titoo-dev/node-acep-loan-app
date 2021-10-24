CREATE TABLE ADMIN
(
  CODE_ADMIN     VARCHAR(5)              NOT NULL,
  EMAIL  VARCHAR(40),
  MOT_DE_PASSE     VARCHAR(100)
);

ALTER TABLE ADMIN ADD 
  PRIMARY KEY
  (CODE_ADMIN);



Insert into ADMIN
   (CODE_ADMIN, EMAIL, MOT_DE_PASSE)
 Values
   ('1', 'titosymanankasina1@gmail.com', '123soleil');


Insert into ADMIN
   (CODE_ADMIN, EMAIL, MOT_DE_PASSE)
 Values
   ('2', 'tiavinaramanandraibe@gmail.com', '456lune');

   
Insert into ADMIN
   (CODE_ADMIN, EMAIL, MOT_DE_PASSE)
 Values
   ('3', 'fehizoroandriantsarafara@gmail.com', '4gf/ki');