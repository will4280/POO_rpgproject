let log = new Log(document.querySelector('.log'));

let char = new Knigth ("Salazar");
let  monster = new Grendel();

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
);


stage.start();


