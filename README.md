# quickybet

# For the fist time, if the tables is not exist 

To create tables
```npx sequelize-cli db:migrate```

To create test data
```npx sequelize-cli db:seed:all```

migrationda bazi sorunlar var gibi,

ALTER TABLE Bets MODIFY COLUMN name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE Bets MODIFY COLUMN content VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE Options MODIFY COLUMN content VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE Options MODIFY COLUMN address VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;

ALTER TABLE Payments MODIFY COLUMN addressto VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE Payments MODIFY COLUMN addressfrom VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL;
ALTER TABLE Payments MODIFY COLUMN txid VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL; 


