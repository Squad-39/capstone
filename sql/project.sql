DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS squad;
DROP TABLE IF EXISTS request;
DROP TABLE IF EXISTS message;
DROP TABLE IF EXISTS game;

CREATE TABLE IF NOT EXISTS profile(
                                      profileId UUID NOT NULL,
                                      profileActivationToken VARCHAR(255),
                                      profileEmail VARCHAR(32) NOT NULL,
                                      profileHash VARCHAR(97) NOT NULL,
                                      profileImage VARCHAR(24) NOT NULL,
                                      profileName VARCHAR(32) NOT NULL,
                                      UNIQUE(profileEmail),
                                      PRIMARY KEY(profileId)
);

CREATE TABLE IF NOT EXISTS squad(
                                    squadId UUID NOT NULL,
                                    squadProfileId UUID NOT NULL,
                                    squadAchievements CHAR(8),
                                    squadEmblem VARCHAR(255),
                                    squadMaxSize VARCHAR(255),
                                    squadName VARCHAR(255),
                                    PRIMARY KEY(squadId),
                                    FOREIGN KEY(squadProfileId) REFERENCES profile(profileId)
);

CREATE TABLE IF NOT EXISTS request(
                                      requestProfileId UUID NOT NULL,
                                      requestSquadId UUID NOT NULL,
                                      requestStatus VARCHAR(24),
                                      FOREIGN KEY(requestProfileId) REFERENCES profile(profileId),
                                      FOREIGN KEY(requestSquadId) REFERENCES squad(squadId)
);

CREATE TABLE IF NOT EXISTS message(
                                      messageId UUID NOT NULL,
                                      messageOwnerId UUID NOT NULL,
                                      messageProfileId UUID NOT NULL,
                                      messageContent VARCHAR(255),
                                      messageDateTime TIMESTAMP NOT NULL,
                                      messageSentBy VARCHAR(255),
                                      PRIMARY KEY(messageId),
                                      FOREIGN KEY(messageOwnerId) REFERENCES profile(profileName),
                                      FOREIGN KEY(messageProfileId) REFERENCES profile(profileId)
);

CREATE TABLE IF NOT EXISTS game(
                                   gameId UUID NOT NULL,
                                   gameSquadId UUID NOT NULL,
                                   gameGenre VARCHAR(32),
                                   gameImageUrl VARCHAR(255),
                                   gameName VARCHAR(32),
                                   PRIMARY KEY(gameId),
                                   FOREIGN KEY(gameSquadId) REFERENCES squad(squadProfileId)
);