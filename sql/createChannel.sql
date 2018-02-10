CREATE TABLE if not exists cms_channel(
    pageID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    pageName VARCHAR(255) NOT NULL UNIQUE,
    parentID INTEGER DEFAULT 0,
    description TEXT,
    keywords TEXT,
    pic TEXT,
    smallpic TEXT,
    pageMode INTEGER DEFAULT 1,
    content TEXT,
    masteruser TEXT
);