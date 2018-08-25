var data = {};
var keys = ['available', 'top_player_2017', 'name', 'team', 'position', 'value', 'targeting', 'targeting_2017', 'green_flag', 'red_flag', 'passing_completions_attempts', 'passing_yds', 'passing_tds', 'passing_ints', 'rushing_attempts', 'rushing_yds', 'rushing tds', 'receptions', 'receiving_yards', 'receiving_tds', 'targets', '2pc', 'fumble', 'misc_td', 'total'];

var map_player = function(player) {
    return player.reduce(function (result, v, i) {
        result[keys[i]] = v;
        return result;
    }, {});
};

data.raw_players = [
    // Available, Star, Name, Team, Position, Targeting, Green Flag, Red Flag, Value, P C/A, Passing Yds, Passing TDs, Passing Ints, Rush, Rushing Yds, Rushing TDs, Receptions, Receiving Yards, Receiving TDs, Targets, 2pc, fumble, td, Total
    [null,true,'Russell Wilson','Sea','QB',349,1,,,,339/553,3983,34,11,95,586,3,0,0,0,0,2,3,0,452.3],
    [null,true,'Cam Newton','Car','QB',299,1,,,,291/492,3302,22,16,139,754,6,0,0,0,0,1,1,0,380.5],
    [null,true,'Tom Brady','NE','QB',297,1,,,,385/581,4577,32,8,25,28,0,0,0,0,0,2,3,0,404.9],
    [null,true,'Alex Smith','Wsh','QB',296,1,,,,341/505,4042,26,5,60,355,1,0,0,0,0,0,1,0,404.3],
    [null,true,'Kirk Cousins','Min','QB',286,,1,,,347/540,4093,27,13,49,179,4,0,0,0,0,0,5,0,371.2],
    [null,true,'Matthew Stafford','Det','QB',282,,1,,,371/565,4446,29,10,29,98,0,0,0,0,0,2,7,0,379.6],
    [null,false,'Carson Wentz','Phi','QB',278,,,,,265/440,3296,33,7,64,299,0,0,0,0,0,4,3,0,384.6],
    [null,false,'Philip Rivers','LAC','QB',271,,,,,360/575,4515,28,10,18,-2,0,0,0,0,0,0,1,0,369.2],
    [null,false,'Dak Prescott','Dal','QB',265,,1,,,308/490,3324,22,13,57,357,6,0,0,0,0,0,3,0,346.2],
    [null,false,'Drew Brees','NO','QB',262,,1,,,386/536,4334,23,8,33,12,2,0,0,0,0,0,0,0,349.5],
    [null,false,'Jared Goff','LAR','QB',261,,,,,296/477,3804,28,7,28,51,1,0,0,0,0,0,3,0,348.7],
    [null,false,'Ben Roethlisberger','Pit','QB',258,,,,,360/561,4251,28,14,28,47,0,0,0,0,0,2,1,0,359.5],
    [null,false,'Blake Bortles','Jax','QB',249,,,,,315/523,3687,21,13,57,322,2,0,0,0,0,3,3,0,324.9],
    [null,false,'Case Keenum','Den','QB',237,,,,,325/481,3547,22,7,40,160,1,0,0,0,0,1,1,0,324.4],
    [null,false,'Matt Ryan','Atl','QB',233,,1,,,342/529,4095,20,12,32,143,0,0,0,0,0,0,3,0,310.5],
    [null,false,'Tyrod Taylor','Cle','QB',225,,,,,263/420,2799,14,4,84,427,4,0,0,0,0,0,2,0,283.4],
    [null,false,'Andy Dalton','Cin','QB',217,,,,,297/496,3320,25,12,38,99,0,0,0,0,0,0,4,0,302.2],
    [null,false,'Josh McCown','NYJ','QB',213,,,,,267/397,2926,18,9,37,124,5,0,0,0,0,0,4,0,268.8],
    [null,false,'Jameis Winston','TB','QB',213,,,,,282/442,3504,19,11,33,135,1,0,0,0,0,1,7,0,267.2],
    [null,false,'Marcus Mariota','Ten','QB',212,,,,,281/453,3232,13,15,60,312,5,0,0,0,0,0,1,0,277.6],
    [null,false,'Jacoby Brissett','Ind','QB',211,,,,,276/469,3098,13,7,63,260,4,0,0,0,0,0,3,0,272.8],
    [null,false,'Derek Carr','Oak','QB',207,,,,,323/515,3496,22,13,23,66,0,0,0,0,0,2,3,0,290],
    [null,false,'Eli Manning','NYG','QB',196,,,,,352/571,3468,19,13,12,26,1,0,0,0,0,0,5,0,263.7],
    [null,false,'DeShone Kizer','GB','QB',186,,,,,255/476,2894,11,22,77,419,5,0,0,0,0,0,6,0,229.9],
    [null,false,'Joe Flacco','Bal','QB',182,,,,,352/549,3141,18,13,25,54,1,0,0,0,0,1,0,0,254.7],
    [null,false,'Deshaun Watson','Hou','QB',165,,,,,126/204,1699,19,8,36,269,2,0,0,0,0,2,1,0,229.1],
    [null,false,'Jay Cutler','FA','QB',157,,,,,266/429,2666,19,14,19,32,0,0,0,0,0,0,0,0,220.3],
    [null,false,'Mitchell Trubisky','Chi','QB',137,,,,,196/330,2193,7,7,41,248,2,0,0,0,0,1,3,0,167.2],
    [null,false,'Aaron Rodgers','GB','QB',131,,,,,154/238,1675,16,6,24,126,0,0,0,0,0,0,1,0,179.4],
    [null,false,'Trevor Siemian','Min','QB',129,,,,,206/349,2285,12,14,31,127,1,0,0,0,0,0,2,0,170.8],
    [null,false,'Brett Hundley','GB','QB',125,,,,,192/316,1836,9,12,36,270,2,1,10,0,1,1,2,0,166.7],
    [null,false,'Carson Palmer','FA','QB',102,,,,,164/267,1978,9,7,14,12,0,0,0,0,0,0,0,0,138.1],
    [null,false,'C.J. Beathard','SF','QB',92,,,,,123/224,1430,4,6,26,136,3,0,0,0,0,0,2,0,116.7],
    [null,false,'Jimmy Garoppolo','SF','QB',86,,,,,120/178,1560,7,5,15,11,1,1,-6,0,1,0,0,0,113.9],
    [null,false,'Ryan Fitzpatrick','TB','QB',73,,,,,96/163,1103,7,3,15,78,0,0,0,0,0,0,0,0,99],
    [null,true,'Todd Gurley II','LAR','RB',322,1,,,,0/0,0,0,0,279,1305,13,64,788,6,87,0,2,0,382.2],
    [null,true,'Le\'Veon Bell','Pit','RB',260,1,1,,,0/0,0,0,0,321,1291,9,85,655,2,107,0,2,0,330.2],
    [null,true,'Kareem Hunt','KC','RB',243,1,,,,0/0,0,0,0,272,1327,8,53,455,3,63,0,1,0,301.9],
    [null,true,'Alvin Kamara','NO','RB',232,1,,,,0/0,0,0,0,120,728,8,81,826,5,100,1,1,1,293.9],
    [null,true,'Melvin Gordon','LAC','RB',229,1,1,,,0/0,0,0,0,284,1105,8,58,476,4,83,0,0,0,288.5],
    [null,true,'Mark Ingram II','NO','RB',225,1,1,,,0/0,0,0,0,230,1124,12,58,416,0,71,0,3,0,274],
    [null,true,'LeSean McCoy','Buf','RB',205,1,1,,,0/0,0,0,0,287,1138,6,59,448,2,77,0,1,0,262.8],
    [null,true,'Leonard Fournette','Jax','RB',194,1,,,,0/0,0,0,0,268,1040,9,36,302,1,48,0,0,0,241],
    [null,true,'Ezekiel Elliott','Dal','RB',178,,1,,,0/0,0,0,0,242,983,7,26,269,2,38,0,1,0,216.4],
    [null,true,'Jordan Howard','Chi','RB',178,,1,,,0/0,0,0,0,276,1122,9,23,125,0,32,0,1,0,215.8],
    [null,false,'Carlos Hyde','Cle','RB',176,,,,,0/0,0,0,0,240,938,8,59,350,0,87,0,1,0,227.3],
    [null,false,'Devonta Freeman','Atl','RB',165,,1,,,0/0,0,0,0,196,865,7,36,317,1,46,0,1,0,198.8],
    [null,false,'Dion Lewis','Ten','RB',164,,,,,0/0,0,0,0,180,896,6,32,214,3,36,0,0,1,205],
    [null,false,'Lamar Miller','Hou','RB',156,,,,,0/0,0,0,0,238,888,3,36,327,3,45,0,0,0,198.3],
    [null,false,'Alex Collins','Bal','RB',151,,,,,0/0,0,0,0,212,973,6,23,187,0,36,0,2,0,178.7],
    [null,false,'Christian McCaffrey','Car','RB',150,,,,,0/0,0,0,0,117,435,2,80,651,5,113,0,1,0,199.3],
    [null,false,'C.J. Anderson','Car','RB',146,,,,,0/0,0,0,0,245,1007,3,28,224,1,40,1,1,0,185.6],
    [null,false,'Marshawn Lynch','Oak','RB',146,,,,,0/0,0,0,0,207,891,7,20,151,0,31,0,1,0,176.9],
    [null,false,'Duke Johnson Jr.','Cle','RB',145,,,,,0/0,0,0,0,82,348,4,74,693,3,93,0,2,0,187.3],
    [null,false,'Frank Gore','Mia','RB',144,,,,,0/0,0,0,0,261,961,3,29,245,1,38,0,0,0,182.2],
    [null,false,'Latavius Murray','Min','RB',142,,,,,0/0,0,0,0,216,842,8,15,103,0,17,0,0,0,170.6],
    [null,false,'Tevin Coleman','Atl','RB',139,,,,,0/0,0,0,0,156,628,5,27,299,3,39,0,0,0,168.8],
    [null,false,'DeMarco Murray','FA','RB',133,,,,,0/0,0,0,0,184,659,6,39,266,1,47,0,1,0,172.4],
    [null,false,'Jerick McKinnon','SF','RB',129,,,,,0/0,0,0,0,150,570,3,51,421,2,68,1,2,0,168.6],
    [null,false,'Bilal Powell','NYJ','RB',124,,,,,0/0,0,0,0,178,772,5,23,170,0,33,0,1,0,155.5],
    [null,false,'Derrick Henry','Ten','RB',123,,,,,0/0,0,0,0,176,744,5,11,136,1,17,0,0,0,152.1],
    [null,false,'Javorius Allen','Bal','RB',120,,,,,0/0,0,0,0,153,591,4,46,250,2,60,0,0,0,158.4],
    [null,false,'Jamaal Williams','GB','RB',117,,,,,0/0,0,0,0,153,556,4,25,262,2,34,0,0,0,147.6],
    [null,false,'Orleans Darkwa','FA','RB',116,,,,,0/0,0,0,0,171,751,5,19,116,0,28,1,0,0,146.3],
    [null,false,'Chris Thompson','Wsh','RB',116,,,,,0/0,0,0,0,64,294,2,39,510,4,54,0,2,0,139.3],
    [null,false,'Isaiah Crowell','NYJ','RB',115,,,,,0/0,0,0,0,206,853,2,28,182,0,42,1,1,0,150.1],
    [null,false,'Jonathan Stewart','NYG','RB',115,,,,,0/0,0,0,0,198,680,6,8,52,1,15,0,3,0,135],
    [null,false,'Jay Ajayi','Phi','RB',114,,1,,,0/0,0,0,0,208,873,1,24,158,1,34,0,2,0,144.9],
    [null,false,'Joe Mixon','Cin','RB',114,,,,,0/0,0,0,0,178,626,4,30,287,0,34,0,2,0,143.1],
    [null,false,'Kenyan Drake','Mia','RB',111,,,,,0/0,0,0,0,133,644,3,32,239,1,50,1,2,0,143.6],
    [null,false,'Giovani Bernard','Cin','RB',107,,,,,0/0,0,0,0,105,458,2,43,389,2,60,0,0,0,142.7],
    [null,false,'Theo Riddick','Det','RB',102,,,,,0/0,0,0,0,84,286,3,53,444,2,71,0,1,0,135.9],
    [null,false,'Ameer Abdullah','Det','RB',101,,,,,0/0,0,0,0,165,552,4,25,162,1,34,0,1,0,127.4],
    [null,false,'LeGarrette Blount','Det','RB',99,,1,,,0/0,0,0,0,173,766,2,8,50,1,8,1,1,0,120.9],
    [null,false,'Rex Burkhead','NE','RB',99,,,,,0/0,0,0,0,64,264,5,30,254,3,36,0,0,0,120.2],
    [null,false,'Tarik Cohen','Chi','RB',94,,,,,1/2,21,1,0,87,370,2,53,353,1,71,0,2,1,133.4],
    [null,false,'Samaje Perine','Wsh','RB',90,,,,,0/0,0,0,0,175,603,1,22,182,1,24,0,2,0,115],
    [null,false,'Matt Forte','FA','RB',85,,,,,0/0,0,0,0,103,381,2,37,293,1,45,0,1,0,112.2],
    [null,false,'Austin Ekeler','LAC','RB',83,,,,,0/0,0,0,0,47,260,2,27,279,3,35,0,2,0,98.1],
    [null,false,'Matt Breida','SF','RB',82,,,,,0/0,0,0,0,105,465,2,21,180,1,36,0,0,0,102.5],
    [null,false,'Marlon Mack','Ind','RB',81,,,,,0/0,0,0,0,93,358,3,21,225,1,33,0,0,0,101.1],
    [null,false,'Corey Clement','Phi','RB',80,,,,,0/0,0,0,0,74,321,4,10,123,2,15,1,0,0,94.8],
    [null,false,'James White','NE','RB',77,,,,,0/0,0,0,0,43,171,0,56,429,3,72,0,0,0,110.3],
    [null,false,'Rod Smith','Dal','RB',73,,,,,0/0,0,0,0,55,232,4,19,202,1,23,0,0,0,90.4],
    [null,false,'Wayne Gallman','NYG','RB',72,,,,,0/0,0,0,0,111,476,0,34,193,1,48,0,1,0,97],
    [null,true,'Rob Gronkowski','NE','TE',156,1,,,,0/0,0,0,0,0,0,0,69,1084,8,106,1,0,0,193.9],
    [null,true,'Travis Kelce','KC','TE',149,1,1,,,0/1,0,0,1,2,7,0,83,1038,8,123,0,0,0,192.2],
    [null,true,'Zach Ertz','Phi','TE',130,1,1,,,0/0,0,0,0,0,0,0,74,824,8,110,0,1,0,165.4],
    [null,true,'Jimmy Graham','GB','TE',112,1,1,,,0/0,0,0,0,0,0,0,57,520,10,97,1,0,0,142.5],
    [null,true,'Evan Engram','NYG','TE',109,1,,,,0/0,0,0,0,1,14,0,64,722,6,115,0,0,0,141.7],
    [null,true,'Delanie Walker','Ten','TE',103,1,1,,,0/0,0,0,0,2,-2,1,74,807,3,111,0,2,0,137.7],
    [null,true,'Kyle Rudolph','Min','TE',101,1,1,,,0/0,0,0,0,0,0,0,57,532,8,81,0,0,0,129.7],
    [null,false,'Cameron Brate','TB','TE',95,,1,,,0/0,0,0,0,0,0,0,48,591,6,77,0,0,0,118.1],
    [null,false,'Jack Doyle','Ind','TE',93,,,,,0/0,0,0,0,0,0,0,80,690,4,107,0,2,0,129],
    [null,false,'Jason Witten','FA','TE',86,,,,,0/0,0,0,0,0,0,0,63,560,5,87,0,1,0,115.5],
    [null,false,'Tyler Kroft','Cin','TE',82,,,,,0/0,0,0,0,0,0,0,42,404,7,62,0,0,0,103.4],
    [null,false,'Vernon Davis','Wsh','TE',82,,,,,0/0,0,0,0,0,0,0,43,648,3,69,0,2,0,100.3],
    [null,false,'Eric Ebron','Ind','TE',81,,,,,0/0,0,0,0,0,0,0,53,574,4,86,0,1,0,105.9],
    [null,false,'Hunter Henry*','LAC','TE',81,,,,,0/0,0,0,0,0,0,0,45,579,4,63,0,0,0,104.4],
    [null,false,'Jared Cook','Oak','TE',80,,,,,0/0,0,0,0,0,0,0,54,688,2,86,0,1,0,105.8],
    [null,false,'O.J. Howard','TB','TE',79,,,,,0/0,0,0,0,0,0,0,26,432,6,39,0,2,0,89.2],
    [null,false,'Benjamin Watson','NO','TE',76,,,,,0/0,0,0,0,0,0,0,61,522,4,79,0,0,0,105.7],
    [null,false,'Austin Hooper','Atl','TE',70,,,,,0/0,0,0,0,0,0,0,49,526,3,65,0,0,0,97.1],
    [null,false,'Charles Clay','Buf','TE',67,,,,,0/0,0,0,0,0,0,0,49,558,2,74,0,0,0,91.3],
    [null,false,'George Kittle','SF','TE',63,,,,,0/0,0,0,0,0,0,0,43,515,2,63,0,0,0,85],
    [null,false,'David Njoku','Cle','TE',62,,,,,0/0,0,0,0,1,1,0,32,386,4,60,0,0,0,78.8],
    [null,false,'Marcedes Lewis','GB','TE',61,,,,,0/0,0,0,0,0,0,0,24,318,5,49,1,0,0,75.8],
    [null,false,'Garrett Celek','SF','TE',57,,,,,0/0,0,0,0,0,0,0,21,336,4,33,0,0,0,70.1],
    [null,false,'Julius Thomas','FA','TE',56,,,,,0/0,0,0,0,0,0,0,41,388,3,63,0,0,0,76.3],
    [null,false,'Jesse James','Pit','TE',55,,,,,0/0,0,0,0,0,0,0,43,372,3,63,0,0,0,76.7],
    [null,false,'Trey Burton','Chi','TE',54,,,,,0/0,0,0,0,0,0,0,23,248,5,30,1,0,0,68.3],
    [null,false,'Austin Seferian-Jenkins','Jax','TE',53,,,,,0/0,0,0,0,0,0,0,50,357,3,74,0,1,0,76.7],
    [null,false,'Ed Dickson*','Sea','TE',49,,,,,0/0,0,0,0,0,0,0,30,437,1,47,0,0,0,64.7],
    [null,false,'Antonio Gates','FA','TE',49,,,,,0/0,0,0,0,0,0,0,30,316,3,52,0,0,0,64.6],
    [null,false,'Seth DeValve','Cle','TE',45,,,,,0/0,0,0,0,0,0,0,33,395,1,57,0,1,0,60],
    [null,false,'Jermaine Gresham*','Ari','TE',44,,,,,0/0,0,0,0,0,0,0,33,322,2,45,0,0,0,60.7],
    [null,false,'Nick O\'Leary','Buf','TE',44,,,,,0/0,0,0,0,0,0,0,22,322,2,32,0,1,0,53.2],
    [null,false,'Coby Fleener','FA','TE',41,,,,,0/0,0,0,0,0,0,0,22,295,2,30,0,0,0,52.5],
    [null,false,'Stephen Anderson','Hou','TE',40,,,,,0/0,0,0,0,0,0,0,25,342,1,55,0,0,0,52.7],
    [null,false,'Luke Willson','Det','TE',39,,,,,0/0,0,0,0,0,0,0,15,153,4,22,0,0,0,46.8],
    [null,false,'Ricky Seals-Jones','Ari','TE',38,,,,,0/0,0,0,0,0,0,0,12,201,3,28,0,0,0,44.1],
    [null,false,'Gerald Everett','LAR','TE',37,,,,,0/0,0,0,0,1,13,0,16,244,2,32,0,1,0,43.8],
    [null,false,'A.J. Derby','Mia','TE',36,,,,,0/0,0,0,0,0,0,0,21,244,2,41,0,1,0,44.9],
    [null,false,'Tyler Higbee','LAR','TE',35,,,,,0/0,0,0,0,0,0,0,25,295,1,45,0,0,0,48],
    [null,false,'Rhett Ellison','NYG','TE',35,,,,,0/0,0,0,0,0,0,0,24,235,2,32,0,0,0,47.5],
    [null,false,'Zach Miller*','Chi','TE',35,,,,,0/0,0,0,0,0,0,0,20,236,2,35,0,0,0,45.6],
    [null,false,'Darren Fells','Cle','TE',35,,,,,0/0,0,0,0,0,0,0,17,177,3,26,0,0,0,44.2],
    [null,false,'Jordan Reed','Wsh','TE',33,,,,,0/0,0,0,0,0,0,0,27,211,2,35,0,0,0,45.6],
    [null,false,'Adam Shaheen','Chi','TE',30,,,,,0/0,0,0,0,0,0,0,12,127,3,14,0,0,0,36.7],
    [null,false,'Martellus Bennett','FA','TE',28,,1,,,0/0,0,0,0,0,0,0,30,286,0,44,0,0,0,43.6],
    [null,false,'Demetrius Harris','KC','TE',28,,,,,0/0,0,0,0,0,0,0,18,224,1,35,0,0,0,37.4],
    [null,false,'Jonnu Smith','Ten','TE',27,,,,,0/0,0,0,0,0,0,0,18,157,2,30,0,0,0,36.7],
    [null,false,'Lance Kendricks','GB','TE',26,,,,,0/0,0,0,0,0,0,0,18,203,1,35,0,0,0,35.3],
    [null,false,'Greg Olsen','Car','TE',25,,,,,0/0,0,0,0,0,0,0,17,191,1,38,0,0,0,33.6],
    [null,false,'Nick Boyle','Bal','TE',20,,,,,0/0,0,0,0,0,0,0,28,203,0,37,1,0,0,36.3],
    [null,true,'DeAndre Hopkins','Hou','WR',215,1,,,,0/0,0,0,0,0,0,0,96,1378,13,175,0,1,0,263.8],
    [null,true,'Antonio Brown','Pit','WR',207,1,1,,,0/0,0,0,0,0,0,0,101,1533,9,162,1,0,0,259.8],
    [null,true,'Keenan Allen','LAC','WR',175,1,,,,0/0,0,0,0,2,9,0,102,1393,6,159,0,0,0,234.4],
    [null,true,'Marvin Jones Jr.','Det','WR',164,1,,,,0/0,0,0,0,0,0,0,61,1101,9,108,0,0,0,196.6],
    [null,true,'Tyreek Hill','KC','WR',163,1,,,,0/1,0,0,1,17,59,0,75,1183,7,105,0,0,1,219.4],
    [null,true,'Julio Jones','Atl','WR',163,1,1,,,0/0,0,0,0,1,15,0,88,1444,3,149,0,0,0,210],
    [null,true,'A.J. Green','Cin','WR',155,1,,,,0/0,0,0,0,0,0,0,75,1078,8,145,0,2,0,193.3],
    [null,true,'Michael Thomas','NO','WR',154,1,1,,,0/0,0,0,0,0,0,0,104,1245,5,149,0,0,0,206.5],
    [null,true,'Brandin Cooks','LAR','WR',154,1,1,,,0/0,0,0,0,9,40,0,65,1082,7,114,1,0,0,193.6],
    [null,true,'Adam Thielen','Min','WR',152,1,,,,0/0,0,0,0,1,11,0,91,1276,4,143,0,2,0,197.3],
    [null,true,'Larry Fitzgerald','Ari','WR',151,1,1,,,1/1,21,0,0,0,0,0,109,1156,6,162,1,1,0,207],
    [null,true,'Jarvis Landry','Cle','WR',151,1,,,,0/1,0,0,0,1,-7,0,112,987,9,160,0,2,0,202.1],
    [null,true,'Davante Adams','GB','WR',148,1,1,,,0/0,0,0,0,0,0,0,74,885,10,118,0,0,0,187.5],
    [null,true,'Doug Baldwin','Sea','WR',146,1,1,,,0/0,0,0,0,2,-8,0,75,991,8,117,1,0,0,186],
    [null,false,'Robby Anderson','NYJ','WR',136,,,,,0/0,0,0,0,3,9,0,63,941,7,114,0,0,0,172.8],
    [null,false,'JuJu Smith-Schuster','Pit','WR',133,,,,,0/0,0,0,0,0,0,0,58,917,7,80,0,0,1,170.7],
    [null,false,'Stefon Diggs','Min','WR',133,,,,,0/0,0,0,0,8,13,0,64,849,8,95,0,0,0,169],
    [null,false,'Golden Tate','Det','WR',132,,,,,0/0,0,0,0,5,22,0,92,1003,5,122,1,1,0,185],
    [null,false,'Alshon Jeffery*','Phi','WR',132,,,,,0/0,0,0,0,0,0,0,57,789,9,120,3,0,0,169.4],
    [null,false,'Devin Funchess','Car','WR',132,,,,,0/0,0,0,0,0,0,0,63,840,8,113,0,0,0,163.5],
    [null,false,'Mike Evans','TB','WR',130,,1,,,0/0,0,0,0,0,0,0,71,1001,5,135,1,0,0,168.6],
    [null,false,'Nelson Agholor','Phi','WR',124,,,,,0/0,0,0,0,1,7,0,62,768,8,95,0,0,0,166.6],
    [null,false,'Demaryius Thomas','Den','WR',124,,,,,0/0,0,0,0,0,0,0,83,949,5,141,0,1,0,164.4],
    [null,false,'T.Y. Hilton','Ind','WR',120,,1,,,0/0,0,0,0,0,0,0,57,966,4,108,0,1,0,154.1],
    [null,false,'Kenny Stills','Mia','WR',120,,,,,0/0,0,0,0,0,0,0,58,847,6,106,0,2,0,145.7],
    [null,false,'Dez Bryant','FA','WR',118,,,,,0/0,0,0,0,1,-4,0,69,838,6,133,0,1,0,154],
    [null,false,'Cooper Kupp','LAR','WR',116,,,,,0/1,0,0,0,0,0,0,62,869,5,95,0,1,0,145.9],
    [null,false,'Marquise Goodwin','SF','WR',112,,,,,0/0,0,0,0,4,44,0,56,962,2,105,0,0,0,143],
    [null,false,'Jermaine Kearse','NYJ','WR',111,,,,,0/0,0,0,0,0,0,0,65,810,5,103,0,0,0,142.5],
    [null,false,'Amari Cooper','Oak','WR',110,,1,,,0/0,0,0,0,1,4,0,48,680,7,96,0,0,0,139.5],
    [null,false,'Michael Crabtree','Bal','WR',109,,1,,,0/0,0,0,0,0,0,0,58,618,8,101,2,0,0,143.8],
    [null,false,'Robert Woods','LAR','WR',109,,,,,0/0,0,0,0,2,12,0,56,781,5,85,0,1,0,139.5],
    [null,false,'Mohamed Sanu','Atl','WR',107,,,,,1/1,51,1,0,4,10,0,67,703,5,97,0,0,0,145.3],
    [null,false,'Sammy Watkins','KC','WR',107,,,,,0/0,0,0,0,0,0,0,39,593,8,70,0,0,0,128.8],
    [null,false,'Paul Richardson','Wsh','WR',106,,,,,0/0,0,0,0,0,0,0,44,703,6,80,0,0,0,130.3],
    [null,false,'Ted Ginn Jr.','NO','WR',105,,,,,0/0,0,0,0,10,39,0,53,787,4,70,0,0,0,136.1],
    [null,false,'Rishard Matthews*','Ten','WR',102,,,,,0/0,0,0,0,1,-3,0,53,795,4,87,0,0,0,133.8],
    [null,false,'Jamison Crowder','Wsh','WR',99,,,,,0/0,0,0,0,7,34,0,66,789,3,104,0,3,0,125],
    [null,false,'Mike Wallace','Phi','WR',98,,,,,0/0,0,0,0,1,4,0,52,748,4,92,0,0,0,125.3],
    [null,false,'Tyrell Williams','LAC','WR',96,,,,,0/0,0,0,0,0,0,0,43,728,4,69,0,1,0,122.3],
    [null,false,'Keelan Cole','Jax','WR',92,,,,,0/0,0,0,0,0,0,0,42,748,3,81,0,1,0,112.8],
    [null,false,'Randall Cobb','GB','WR',90,,,,,1/1,10,0,0,9,17,0,66,653,4,91,1,0,0,126.4],
    [null,false,'Marqise Lee','Jax','WR',89,,,,,0/1,0,0,0,1,17,0,56,702,3,96,1,0,0,119],
    [null,false,'Travis Benjamin','LAC','WR',89,,,,,0/0,0,0,0,13,96,0,34,567,4,64,0,0,1,116.6],
    [null,false,'DeSean Jackson','TB','WR',87,,,,,0/0,0,0,0,3,38,0,50,668,3,91,0,0,0,113.9],
    [null,false,'Kelvin Benjamin','Buf','WR',87,,,,,0/0,0,0,0,0,0,0,48,692,3,78,0,0,0,111.2],
    [null,false,'Sterling Shepard','NYG','WR',85,,,,,0/0,0,0,0,4,4,0,59,731,2,84,0,0,0,118.4],
    [null,false,'Jordy Nelson','Oak','WR',84,,1,,,0/0,0,0,0,0,0,0,53,482,6,88,0,0,0,110.7],
    [null,false,'Josh Doctson','Wsh','WR',84,,,,,0/0,0,0,0,1,-14,0,35,502,6,78,0,0,0,106.4],
    [null,false,'Will Fuller V','Hou','WR',84,,,,,0/0,0,0,0,2,9,0,28,423,7,50,0,0,0,103.4],
    [null,false,'Ryan Grant','Ind','WR',81,,,,,0/0,0,0,0,0,0,0,45,573,4,65,0,0,0,105.8],
    [null,false,'Martavis Bryant','Oak','WR',80,,,,,0/0,0,0,0,6,22,0,50,603,3,84,1,0,0,108.1],
    [null,false,'Danny Amendola','Mia','WR',77,,,,,0/0,0,0,0,0,0,0,61,659,2,86,0,0,0,106.4],
    [null,false,'Chris Hogan','NE','WR',74,,,,,0/0,0,0,0,3,17,0,34,439,5,59,0,0,0,94.9],
    [null,false,'DeVante Parker','Mia','WR',73,,,,,0/0,0,0,0,0,0,0,57,670,1,96,0,0,0,100.5],
    [null,false,'Albert Wilson','Mia','WR',73,,,,,0/0,0,0,0,3,6,0,42,554,3,63,0,0,0,97.3],
    [null,false,'Tyler Lockett','Sea','WR',72,,,,,0/0,0,0,0,10,58,0,45,555,2,69,0,0,1,104.8],
    [null,false,'Brandon LaFell','Cin','WR',72,,,,,0/0,0,0,0,0,0,0,52,548,3,87,0,0,0,97.8],
    [null,false,'Jaron Brown','Sea','WR',71,,,,,0/0,0,0,0,0,0,0,31,477,4,69,0,0,0,89.2],
    [null,false,'Adam Humphries','TB','WR',69,,,,,0/0,0,0,0,1,6,0,61,631,1,83,0,1,0,98.3],
    [null,false,'Kendall Wright','Min','WR',67,,,,,0/0,0,0,0,0,0,0,59,614,1,91,0,0,0,96.9],
    [null,false,'Emmanuel Sanders','Den','WR',67,,,,,0/0,0,0,0,0,0,0,47,555,2,94,0,0,0,91],
    [null,false,'Deonte Thompson','Dal','WR',66,,,,,0/0,0,0,0,2,-5,0,38,555,2,69,0,0,0,85.2],
    [null,false,'Kenny Golladay','Det','WR',65,,,,,0/0,0,0,0,1,9,0,28,477,3,48,0,0,0,84.7],
    [null,false,'J.J. Nelson','Ari','WR',65,,,,,0/0,0,0,0,3,37,0,29,508,2,61,0,1,0,81.3],
    [null,false,'Eric Decker','NE','WR',62,,,,,0/1,0,0,0,0,0,0,54,563,1,83,0,0,0,89.3],
    [null,false,'Jeremy Maclin','FA','WR',62,,,,,0/0,0,0,0,0,0,0,40,440,3,72,0,0,0,84],
    [null,false,'Allen Hurns','Dal','WR',60,,,,,0/0,0,0,0,0,0,0,39,484,2,56,0,0,0,79.9],
    [null,false,'Chris Godwin','TB','WR',58,,,,,0/0,0,0,0,0,0,0,34,525,1,56,0,0,0,75.5],
    [null,false,'Terrance Williams','Dal','WR',57,,,,,0/0,0,0,0,2,15,0,53,568,0,78,0,0,0,85],
    [null,false,'Trent Taylor','SF','WR',55,,,,,0/0,0,0,0,0,0,0,43,430,2,60,0,1,0,74.5],
    [null,false,'Cole Beasley','Dal','WR',55,,,,,0/0,0,0,0,0,0,0,36,314,4,62,0,0,0,73.4],
    [null,false,'Torrey Smith','Car','WR',54,,,,,0/0,0,0,0,1,-3,0,36,430,2,69,0,0,0,74.8],
    [null,false,'Cordarrelle Patterson','NE','WR',54,,,,,0/0,0,0,0,13,121,2,31,309,0,42,0,0,0,72.8],
    [null,false,'Brandon Coleman','NO','WR',54,,,,,0/0,0,0,0,0,0,0,23,364,3,38,0,2,0,61.9],
    [null,false,'Roger Lewis','NYG','WR',53,,,,,0/0,0,0,0,0,0,0,36,416,2,72,0,0,0,71.6],
    [null,false,'Bennie Fowler','Chi','WR',53,,,,,0/0,0,0,0,0,0,0,29,350,3,56,0,0,0,66.5],
    [null,false,'Seth Roberts','Oak','WR',51,,,,,0/0,0,0,0,0,0,0,43,455,1,65,0,2,0,69],
    [null,false,'Donte Moncrief','Jax','WR',51,,,,,0/0,0,0,0,0,0,0,26,391,2,45,0,0,0,66.1],
    [null,false,'Pierre Garcon','SF','WR',50,,,,,0/0,0,0,0,0,0,0,40,500,0,67,0,0,0,70],
    [null,false,'TJ Jones','Det','WR',49,,,,,0/0,0,0,0,0,0,0,33,432,1,58,1,0,0,66.7],
    [null,false,'Brice Butler','Ari','WR',49,,,,,0/0,0,0,0,0,0,0,15,317,3,24,0,0,0,57.2],
    [null,false,'Odell Beckham Jr.','NYG','WR',48,,1,,,0/0,0,0,0,1,8,0,25,302,3,41,0,0,0,63.6],
    [null,false,'John Brown','Bal','WR',48,,,,,0/0,0,0,0,1,10,0,21,299,3,56,0,0,0,59.5],
    [null,false,'Taylor Gabriel','Chi','WR',47,,,,,0/0,0,0,0,8,49,0,33,378,1,51,0,0,0,68],
    [null,false,'Bruce Ellington','Hou','WR',46,,,,,0/0,0,0,0,3,17,0,29,330,2,55,0,0,0,60.5],
    [null,false,'Joshua Bellamy','Chi','WR',43,,,,,0/0,0,0,0,1,6,0,24,376,1,46,0,0,0,58.3],
    [null,false,'Rashard Higgins','Cle','WR',43,,,,,0/0,0,0,0,1,4,0,27,312,2,53,0,1,0,57.2],
    [null,false,'Zay Jones','Buf','WR',43,,,,,0/0,0,0,0,0,0,0,27,316,2,74,0,0,0,57.1],
    [null,false,'Corey Coleman','Buf','WR',42,,,,,0/0,0,0,0,0,0,0,23,305,2,56,0,0,0,54],
    [null,false,'Tavarres King','Min','WR',42,,,,,0/0,0,0,0,2,3,0,18,240,3,37,0,0,0,53.5],
    [null,false,'Chris Moore','Bal','WR',41,,,,,0/0,0,0,0,2,-9,0,18,248,3,38,0,0,0,57.1],
    [null,false,'Dontrelle Inman','FA','WR',40,,,,,0/0,0,0,0,0,0,0,25,343,1,44,0,0,0,52.8],
    [null,false,'Cody Latimer','NYG','WR',40,,,,,0/0,0,0,0,0,0,0,19,287,2,30,1,0,0,51.2],
    [null,false,'Justin Hardy','Atl','WR',40,,,,,0/0,0,0,0,0,0,0,20,221,3,29,0,0,0,49.1],
    [null,false,'Dede Westbrook','Jax','WR',39,,,,,0/0,0,0,0,0,0,0,27,339,1,51,0,0,0,52.4],
    [null,false,'Aldrick Robinson','SF','WR',38,,,,,0/0,0,0,0,0,0,0,19,260,2,48,0,0,0,49.5],
    [null,false,'Corey Davis','Ten','WR',37,,,,,0/0,0,0,0,0,0,0,34,375,0,65,0,1,0,52.5],
    [null,false,'Ricardo Louis*','Cle','WR',35,,,,,0/0,0,0,0,0,0,0,27,357,0,61,0,0,0,49.2],
    [null,false,'Chester Rogers','Ind','WR',34,,,,,0/0,0,0,0,3,8,0,23,284,1,37,0,0,0,49]
];

export const raw_players = data.raw_players.map(map_player);
