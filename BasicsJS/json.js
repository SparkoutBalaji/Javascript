let json = '{"interns" : ['+
    '{"Name":"Balaji","Age":23,"Location":"Madathukulam"}'+
    '{"Name":"Hari Krishnan","Age":22,"Location":"Udumalpet"}'+
    '{"Name":"Kathir Panneerselvam","Age":23,"Location":"Salem"}'+
    '{"Name":"Prasanth Gunaseelan","Age":25,"Location":"Kovai"}]}';

const x = JSON.parse(json);
console.log(x.interns[0].Name+" "+x.interns[3].Location);