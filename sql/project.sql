DROP TABLE IF EXISTS gameSquad;
DROP TABLE IF EXISTS message;
DROP TABLE IF EXISTS request;
DROP TABLE IF EXISTS squad;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS game;
CREATE TABLE IF NOT EXISTS profile
(
    "profileId"              UUID         NOT NULL,
    "profileActivationToken" VARCHAR(255),
    "profileEmail"           VARCHAR(32)  NOT NULL,
    "profileGamertag"        VARCHAR(32)  NOT NULL,
    "profileHash"            VARCHAR(97)  NOT NULL,
    "profileImage"           VARCHAR(24)  NOT NULL,
    "profileName"            VARCHAR(32)  NOT NULL,
    "profilePlatform"        VARCHAR(255) NOT NULL,
    UNIQUE ("profileEmail"),
    PRIMARY KEY ("profileId")
);

CREATE TABLE IF NOT EXISTS squad
(
    "squadId"           UUID NOT NULL,
    "squadProfileId"    UUID NOT NULL,
    "squadAchievements" CHAR(8),
    "squadEmblem"       VARCHAR(255),
    "squadMaxSize"      VARCHAR(255),
    "squadName"         VARCHAR(255),
    UNIQUE ("squadName"),
    PRIMARY KEY ("squadId"),
    FOREIGN KEY ("squadProfileId") REFERENCES profile ("profileId")
);

CREATE INDEX ON squad ("squadProfileId");

CREATE TABLE IF NOT EXISTS request
(
    "requestProfileId" UUID NOT NULL,
    "requestSquadId"   UUID NOT NULL,
    "requestStatus"    BOOLEAN ,
    FOREIGN KEY ("requestProfileId") REFERENCES profile ("profileId"),
    FOREIGN KEY ("requestSquadId") REFERENCES squad ("squadId")
);

CREATE INDEX ON request ("requestProfileId");
CREATE INDEX ON request ("requestSquadId");

CREATE TABLE IF NOT EXISTS message
(
    "messageId"                 UUID      NOT NULL,
    "messageRecipientId" UUID      NOT NULL,
    "messageSenderId"    UUID      NOT NULL,
    "messageContent"            VARCHAR(255),
    "messageDateTime"           TIMESTAMP NOT NULL,
    "messageSentBy"             VARCHAR(255),
    PRIMARY KEY ("messageId"),
    FOREIGN KEY ("messageRecipientId") REFERENCES profile ("profileId"),
    FOREIGN KEY ("messageSenderId") REFERENCES profile ("profileId")
);

CREATE INDEX ON message ("messageRecipientId");
CREATE INDEX ON message ("messageSenderId");

CREATE TABLE IF NOT EXISTS game
(
    "gameId"       UUID NOT NULL,
    "gameGenre"    VARCHAR(32),
    "gameImageUrl" VARCHAR(255),
    "gameName"     VARCHAR(32),
    UNIQUE ("gameName"),
    PRIMARY KEY ("gameId")
);


CREATE TABLE IF NOT EXISTS gameSquad
(
    "gameSquadGameId" UUID NOT NULL,
    "gameSquadSquadId" UUID NOT NULL,
    PRIMARY KEY ("gameSquadGameId", "gameSquadSquadId")
);


CREATE INDEX ON gameSquad ("gameSquadGameId");
CREATE INDEX ON gameSquad ("gameSquadSquadId");