use instructions;

create table Roles(
	id int primary key auto_increment,
    name varchar(120)
);

create table Socials(
	id int primary key auto_increment,
    name varchar(120)
);

create table Users(
	id int primary key auto_increment,
    username varchar(150),
    imageUrl varchar(200),
    roleId int,
    socialId int,
    createdAt date,
    foreign key (roleId) references Roles (id),
    foreign key (socialId) references Socials (id)
);

create table Categories(
	id int primary key auto_increment,
    name varchar(120)
);

create table Instructions(
	id int primary key auto_increment,
    name varchar(150),
    userId int,
    categoryId int,
    youtubeUrl varchar(300),
    createdAt date,
	foreign key (userId) references Users (id),
	foreign key (categoryId) references Categories (id)
);

create table Tags(
	id int primary key auto_increment,
    name varchar(120)
);

create table InstructionsTags(
	instructionId int,
    tagId int,
    primary key(instructionId, tagId),
    foreign key (instructionId) references Instructions (id),
    foreign key (tagId) references Tags (id)
);

create table Steps(
	id int primary key auto_increment,
    text text,
    imageUrl varchar(200),
    stepNumber int,
    instructionId int,
    foreign key (instructionId) references Instructions (id)
);

create table Comments(
	id int primary key auto_increment,
    stepId int,
    userId int,
    text varchar(400),
    foreign key (stepId) references Steps (id),
    foreign key (userId) references Users (id)
);

create table Likes(
	id int primary key auto_increment,
    userId int,
    instructionId int,
    vote boolean,
    foreign key (userId) references Users (id),
    foreign key (instructionId) references Instructions (id)
);

alter table instructions.Users add column jwt varchar(200);

alter table instructions.Users modify jwt varchar(500);

