import { Component } from '@angular/core';
import { Banner } from "../../shared/components/banner/banner";
import { EmCartaz } from "../../shared/components/em-cartaz/em-cartaz";
import { DetalhesComponent } from "../filme/detalhes";

@Component({
  selector: 'app-home',
  imports: [Banner, EmCartaz, DetalhesComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
