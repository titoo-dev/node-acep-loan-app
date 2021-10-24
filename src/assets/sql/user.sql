CREATE TABLE USER
(
  CODE_USER     VARCHAR(5)              NOT NULL,
  EMAIL  VARCHAR(40),
  MOT_DE_PASSE     VARCHAR(100)
);

ALTER TABLE USER ADD 
  PRIMARY KEY
  (CODE_USER)
;

Insert into USER
   (CODE_USER, EMAIL, MOT_DE_PASSE)
 Values
   ('1', 'titosymanankasina1@gmail.com', '123soleil');


Insert into USER
   (CODE_USER, EMAIL, MOT_DE_PASSE)
 Values
   ('2', 'tiavinaramanandraibe@gmail.com', '456lune');

   
Insert into USER
   (CODE_USER, EMAIL, MOT_DE_PASSE)
 Values
   ('3', 'fehizoroandriantsarafara@gmail.com', '4gf/ki');