# Chapitre 6 — Card Time

## Objectif

Dans ce chapitre, on va mettre un peu d’ordre dans tout ce contenu qui commence à s’accumuler.

Votre mission : **créer une série de Cards Bootstrap 5**, les organiser dans une grille responsive et faire en sorte que tout ce petit monde s’adapte proprement à la taille de l’écran.

Parce qu’un site qui ressemble à une grille Excel sur smartphone… ce n’est pas exactement ce qu’on appelle du responsive.

Bienvenue dans **Card Time**.

---

## Exercice 6

### Bootstrap Cards + grille responsive

À partir du code fourni, vous allez créer plusieurs **Cards Bootstrap** et les intégrer dans une grille responsive.

Le but est de comprendre comment Bootstrap permet de construire rapidement une interface composée de plusieurs blocs de contenu, tout en gardant une mise en page adaptée aux différentes tailles d'écran.

Vous allez notamment utiliser :

- les **Cards Bootstrap** ;
- le système de **grille Bootstrap** ;
- les classes `row` et `col-*` ;
- les **breakpoints responsive** ;
- les espacements avec les classes utilitaires Bootstrap.

### Votre mission

Vous devez créer une section contenant plusieurs Cards.

Chaque Card devra pouvoir contenir, selon votre inspiration :

- une image ;
- un titre ;
- une description ;
- éventuellement un bouton ou un lien.

Le contenu est libre.

Vous pouvez parler de vous, présenter des services, des projets, des produits imaginaires…

Bref : **faites quelque chose qui ressemble à une vraie interface.**

---

## 1. La Card Bootstrap

Bootstrap fournit un composant `Card` prêt à l'emploi.

La structure de base ressemble à ceci :

```html
<div class="card">
    <img src="image.jpg" class="card-img-top" alt="...">

    <div class="card-body">
        <h5 class="card-title">Mon titre</h5>
        <p class="card-text">
            Un petit texte pour présenter mon contenu.
        </p>
        <a href="#" class="btn btn-primary">En savoir plus</a>
    </div>
</div>
```

Quelques classes à retenir :

- `.card` → le conteneur principal ;
- `.card-img-top` → l'image située en haut de la Card ;
- `.card-body` → le contenu de la Card ;
- `.card-title` → le titre ;
- `.card-text` → le texte ;
- `.btn` → le bouton Bootstrap.

Pas besoin de réinventer la roue.

Bootstrap vous donne déjà la roue.  
Votre travail consiste maintenant à apprendre à conduire.

---

## 2. La grille Bootstrap

Maintenant, plaçons plusieurs Cards côte à côte.

On utilise pour cela le système de grille Bootstrap.

La structure générale :

```html
<div class="container">
    <div class="row">

        <div class="col">
            ...
        </div>

        <div class="col">
            ...
        </div>

    </div>
</div>
```

La classe `.row` crée une ligne.

Les classes `.col-*` permettent de définir comment cette ligne va être découpée.

Bootstrap fonctionne sur une grille de **12 colonnes**.

Par exemple :

```html
<div class="col-6">
```

occupe la moitié de la largeur disponible.

Et :

```html
<div class="col-4">
```

occupe un tiers.

Simple, efficace, et beaucoup moins douloureux que de calculer tout ça à la main.

---

## 3. Le responsive

Et maintenant, le vrai sujet de cet exercice : **le responsive**.

Votre interface doit fonctionner sur :

- smartphone ;
- tablette ;
- ordinateur ;
- grands écrans.

Bootstrap propose plusieurs breakpoints pour vous aider à gérer ces différentes tailles.

Par exemple :

```html
<div class="col-12 col-md-6 col-xxl-4">
```

Cela signifie :

- `col-12` → sur petit écran, la Card prend toute la largeur ;
- `col-md-6` → à partir de `md`, elle prend la moitié ;
- `col-xxl-4` → sur très grand écran, elle prend un tiers.

Une seule Card peut donc changer de taille selon l'écran.

C'est ça, le **mobile-first**.

On commence par penser petit écran, puis on améliore progressivement la mise en page lorsque davantage d'espace devient disponible.

---

## 4. À vous de jouer

À partir du code fourni dans l'exercice, créez votre propre série de Cards.

Vous pouvez par exemple imaginer :

- une galerie de projets ;
- une liste de services ;
- une équipe ;
- des produits ;
- des formations ;
- des articles ;
- ou complètement autre chose.

Le contenu est libre.

En revanche, la structure doit respecter les principes Bootstrap vus dans le chapitre.

### Checklist du Ninja

Votre exercice doit utiliser :

- [ ] `.card`
- [ ] `.card-body`
- [ ] `.card-title`
- [ ] `.card-text`
- [ ] `.row`
- [ ] des classes `.col-*`
- [ ] plusieurs breakpoints responsive
- [ ] des espacements Bootstrap lorsque nécessaire
- [ ] une mise en page pensée **mobile-first**

Et surtout :

> **Ne faites pas une Card gigantesque qui prend tout l'écran en permanence.**

L'objectif est justement de comprendre comment plusieurs éléments peuvent cohabiter intelligemment.

---

## 5. Exemple de grille

Le projet fourni utilise notamment une structure de ce type :

```html
<div class="row">

    <div class="col-12 col-md-6 col-xxl-4 my-2">
        <div class="card">
            ...
        </div>
    </div>

    <div class="col-12 col-md-6 col-xxl-4 my-2">
        <div class="card">
            ...
        </div>
    </div>

</div>
```

Observez bien la logique :

```text
mobile
↓
1 Card par ligne

tablette
↓
2 Cards par ligne

très grand écran
↓
3 Cards par ligne
```

Et tout cela sans écrire une ligne de media query CSS.

Bootstrap fait le travail.

Vous, vous fournissez les bonnes classes.

---

## 6. Les espacements

Vous allez également rencontrer les classes d'espacement Bootstrap.

Par exemple :

```html
my-2
```

signifie :

- `m` → margin ;
- `y` → axe vertical ;
- `2` → niveau d'espacement Bootstrap.

Vous pouvez donc utiliser les classes utilitaires Bootstrap pour gérer rapidement les espaces entre vos éléments.

Pas besoin de sortir `margin-top: 17px` du chapeau à chaque fois.

---

## Les mains dans le cambouis !

À ce stade, ne vous contentez pas de copier le modèle.

**Testez.**

Changez les :

```html
col-12
col-md-6
col-xxl-4
```

et regardez ce qui se passe.

Essayez :

```html
col-12 col-md-4
```

Puis :

```html
col-12 col-sm-6 col-lg-3
```

Puis inventez votre propre combinaison.

Redimensionnez votre navigateur.

Observez.

Cassez la mise en page.

Réparez-la.

C'est comme ça qu'on apprend.

Et oui, **vous avez parfaitement le droit de casser votre code.**

C'est même fortement recommandé.

---

## Bonus — Les Ninjas commencent à sortir du dojo

Vous commencez à maîtriser les Cards ?

Alors ajoutez un petit niveau de difficulté.

Personnalisez vos Cards avec :

- une image ;
- un badge ;
- un bouton ;
- plusieurs niveaux de contenu.

Consultez la documentation Bootstrap pour découvrir ce que les Cards peuvent faire.


**Vous commencez sérieusement à ressembler à un Ninja.**

---

## Ressources

La documentation officielle reste votre meilleure alliée :

**Bootstrap 5 — Cards**

https://getbootstrap.com/docs/5.3/components/card/

**Bootstrap 5 — Grid**

https://getbootstrap.com/docs/5.3/layout/grid/

**Bootstrap 5 — Breakpoints**

https://getbootstrap.com/docs/5.3/layout/breakpoints/

**Bootstrap 5 — Spacing**

https://getbootstrap.com/docs/5.3/utilities/spacing/

Lisez la documentation.

Testez les exemples.

Modifiez-les.

Comprenez-les.

Puis faites votre propre version.

## Et maintenant ?

Vous avez découvert :

- les **Cards Bootstrap** ;
- la **grille** ;
- les **colonnes** ;
- les **breakpoints** ;
- le **responsive** ;
- le **mobile-first** ;
- les **classes utilitaires d'espacement**.

Vous commencez maintenant à assembler plusieurs composants Bootstrap pour construire une véritable interface.

Le prochain niveau consistera à aller encore plus loin dans la composition des interfaces.

Mais avant ça…

**Amusez-vous.**

Testez.

Bidouillez.

Cassez.

Recommencez.

Et surtout :

# Devenez des Ninjas ! 🥷