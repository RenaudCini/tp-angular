import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postAnimauxRare';

  posts = [
    {
      title: 'Le rhinocéros blanc du Nord',
      content: "Le rhinocéros blanc est le plus grand de tous les rhinocéros. Et pour cause, il mesure pas moins de 4 mètres de long pour une hauteur de 1,90 mètre et un poids de 3 tonnes. Mais il possède aussi la plus longue corne de toutes les espèces de rhinocéros ce qui lui a valu d’être chassé sans relâche jusqu’à ce qu’il ne reste plus un seul individu à l’état sauvage. Le dernier mâle rhinocéros blanc du Nord étant mort en 2018, l’espèce est condamnée à disparaître. En effet, il ne reste que deux femelles encore en vie.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'La tortue de Cantor',

      content: "De nombreuses espèces de tortues se font de plus en plus rares sur la planète. C’est notamment le cas de la tortue de Cantor, une tortue géante qui peut mesurer jusqu’à 2 mètres de long et qui possède une tête particulièrement large. Sa particularité ? Elle passe la majeure partie de son temps enterrée dans le sable et ne sort que deux fois par jour pour respirer !",

      loveIts: 0,

      created_at: new Date()
    },
    {
      title: 'Le marsouin du Pacifique',

      content: "Avec près de 30 individus encore vivants, le marsouin du Pacifique fait partie des animaux les plus rares et les plus menacés de la planète. Ce cétacé, qui est le plus petit au monde, vit seul dans des eaux peu profondes dans le nord du golfe de Californie.",

      loveIts: 0,

      created_at: new Date()
    }
  ];
}
