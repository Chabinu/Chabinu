CREATE TABLE `manager` (
	`manager_no`	INT	NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`manager_id`	VARCHAR(50)	NOT NULL,
	`manager_pw`	VARCHAR(50)	NOT NULL,
	`manager_nm`	VARCHAR(30)	NOT NULL,
	`manager_phone`	VARCHAR(15)	NULL,
	`manager_addr`	VARCHAR(150)	NULL,
	`work_day`	VARCHAR(100)	NULL,
	`word_time`	VARCHAR(100)	NULL,
	`company_no`	INT	NOT NULL	DEFAULT 0,
	`job_cd`	INT	NOT NULL	DEFAULT 300,
	`status_cd`	INT	NOT NULL	DEFAULT 200,
	`grade_cd`	INT	NOT NULL	DEFAULT 100,
	`quality_cd`	INT	NOT NULL,
	`entry_date`	DATETIME	NOT NULL	DEFAULT CURRENT_TIMESTAMP	COMMENT '계약일, 입사일',
	`retire_date`	DATETIME	NULL	COMMENT '해지일, 퇴사일',
	`memo`	TEXT	NULL
);

ALTER TABLE `manager` ADD CONSTRAINT `FK_COMPANY_TO_MANAGER_1` FOREIGN KEY (
	`COMPANY_NO`
)
REFERENCES `COMPANY` (
	`COMPANY_NO`
);

ALTER TABLE `manager` ADD CONSTRAINT `FK_JOB_TO_MANAGER_1` FOREIGN KEY (
	`JOB_CD`
)
REFERENCES `JOB` (
	`JOB_CD`
);

ALTER TABLE `MANAGER` ADD CONSTRAINT `FK_MANAGER_STATUS_TO_MANAGER_1` FOREIGN KEY (
	`STATUS_CD`
)
REFERENCES `MANAGER_STATUS` (
	`STATUS_CD`
);

ALTER TABLE `MANAGER` ADD CONSTRAINT `FK_GRADE_TO_MANAGER_1` FOREIGN KEY (
	`GRADE_CD`
)
REFERENCES `GRADE` (
	`GRADE_CD`
);

ALTER TABLE `MANAGER` ADD CONSTRAINT `FK_QUALITY_TO_MANAGER_1` FOREIGN KEY (
	`QUALITY_CD`
)
REFERENCES `QUALITY` (
	`QUALITY_CD`
);

INSERT INTO manager
(manager_id, manager_pw, manager_nm, quality_cd)
values
('manager01', 'pass01!', '매니저1', 0);
