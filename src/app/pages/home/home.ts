import { Component } from "@angular/core";
import { Hero } from "../../components/hero/hero";
import { Proyectos } from "../../components/proyectos/proyectos";
import { SobreMi } from "../../components/sobre-mi/sobre-mi";

@Component({
    templateUrl: 'home.html',
    styleUrl: 'home.css',
    imports: [
        Hero,
        Proyectos,
        SobreMi
    ]
})
export class Home{

}