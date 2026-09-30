# Étape 5 — Modale Engage

Bienvenue dans le monde merveilleux des composants Bootstrap qui font des choses quand on clique dessus.

Jusqu'ici, nous avons surtout travaillé sur la structure, la grille, le responsive et les icônes.

Cette fois, on passe au niveau supérieur : **une interaction utilisateur avec une vraie modale contenant un formulaire.**

Le bouton « Engager » de la navbar doit maintenant faire quelque chose de plus intéressant que changer de couleur au survol.

## 🎯 Objectif

À partir du projet du chapitre 4, vous allez :

- créer une **modale Bootstrap** ;
- l'ouvrir au clic sur le bouton « Engager » de la navbar ;
- créer un **formulaire de contact** à l'intérieur ;
- utiliser les composants de formulaire Bootstrap ;
- organiser le formulaire avec la **grille 12 colonnes** ;
- utiliser un peu de JavaScript pour améliorer l'expérience utilisateur.

Pas besoin de réinventer JavaScript.

Bootstrap s'occupe déjà d'une grosse partie du travail. Nous allons simplement lui dire quoi faire.

---

## 1. Transformer le bouton « Engager »

Dans la navbar, repérez le bouton :

```html
<button type="button" class="btn btn-outline-primary">
    <i class="bi bi-briefcase-fill me-2"></i>
    Engager
</button>
```

Nous allons lui indiquer qu'il doit ouvrir une modale.

Pour cela, ajoutez :

```html
data-bs-toggle="modal"
data-bs-target="#modalEngage"
```

Le bouton devient donc :

```html
<button
    type="button"
    class="btn btn-outline-primary"
    data-bs-toggle="modal"
    data-bs-target="#modalEngage">
    
    <i class="bi bi-briefcase-fill me-2"></i>
    Engager

</button>
```

### Que vient-il de se passer ?

Bootstrap va chercher un élément possédant l'identifiant :

```html
#modalEngage
```

Il faut donc maintenant créer cette modale.

Sinon, le bouton va cliquer dans le vide.

Et un bouton qui clique dans le vide, c'est généralement le début d'une très mauvaise journée.

---

## 2. Créer la modale

Ajoutez une modale Bootstrap avant la fermeture de la balise `<body>` :

```html
<div class="modal fade" tabindex="-1" id="modalEngage">

    <div class="modal-dialog modal-lg">

        <div class="modal-content">

            <div class="modal-header bg-dark text-light">

                <h5 class="modal-title">
                    Nous allons faire de grandes choses ensemble !
                </h5>

                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                </button>

            </div>

            <div class="modal-body">
                <!-- Votre formulaire ici -->
            </div>

        </div>

    </div>

</div>
```

Observez la structure :

```text
modal
└── modal-dialog
    └── modal-content
        ├── modal-header
        ├── modal-body
        └── modal-footer
```

Bootstrap aime beaucoup les structures imbriquées.

Au début ça paraît un peu verbeux.

Après quelques chapitres, vous commencerez à parler couramment `modal-dialog modal-lg`.

---

## 3. Ajouter le formulaire

À l'intérieur de `.modal-body`, créez votre formulaire.

Vous pouvez partir de cette structure :

```html
<form>

    <div class="row">

        <div class="col-6">
            <div class="mb-3">
                <label for="nom" class="form-label">
                    Nom
                </label>

                <input
                    type="text"
                    class="form-control"
                    id="nom"
                    placeholder="Quel est votre nom ?">
            </div>
        </div>

        <div class="col-6">
            <div class="mb-3">
                <label for="prenom" class="form-label">
                    Prénom
                </label>

                <input
                    type="text"
                    class="form-control"
                    id="prenom"
                    placeholder="Quel est votre prénom ?">
            </div>
        </div>

    </div>

</form>
```

Vous retrouvez ici plusieurs notions déjà rencontrées :

- `.row`
- `.col-*`
- `.mb-3`
- `.form-label`
- `.form-control`

Bootstrap commence à devenir intéressant : **les composants peuvent être combinés entre eux.**

---

## 4. Ajouter l'adresse e-mail

Ajoutez maintenant un champ permettant de récupérer l'adresse e-mail :

```html
<div class="col-6">

    <label for="email" class="form-label">
        Adresse E-mail
    </label>

    <input
        type="email"
        class="form-control"
        id="email"
        placeholder="johnatan-h@orange.fr"
        required>

</div>
```

Remarquez le `type="email"`.

Ce n'est pas juste décoratif : le navigateur comprend qu'il s'agit d'une adresse e-mail et peut effectuer une première vérification.

---

## 5. Ajouter une liste déroulante

Ajoutez maintenant un `<select>` pour demander au visiteur pourquoi il souhaite vous engager.

```html
<div class="col-6">

    <label for="select" class="form-label">
        Vous m'engagez pour ?
    </label>

    <select class="form-select" id="select">

        <option selected>
            Création de sites web de A à Z
        </option>

        <option value="1">
            Design Graphique
        </option>

        <option value="2">
            Développement web
        </option>

        <option value="3">
            UX/UI Design
        </option>

        <option value="4">
            Autre
        </option>

    </select>

</div>
```

Bootstrap applique automatiquement le style grâce à :

```html
class="form-select"
```

Pas besoin de créer 47 lignes de CSS pour obtenir une jolie liste déroulante.

Bootstrap vient de vous faire économiser quelques minutes de vie.

---

## 6. Ajouter le bouton d'envoi

Le bouton doit prendre toute la largeur disponible sur mobile, mais rester aligné à droite sur desktop.

Vous pouvez utiliser :

```html
<div class="col-12 mt-4 text-end">

    <input
        type="submit"
        class="btn btn-outline-primary"
        value="Envoyer le formulaire">

</div>
```

Vous venez de combiner :

- la grille ;
- les espacements ;
- l'alignement du texte ;
- les boutons ;
- les formulaires.

C'est exactement l'intérêt de Bootstrap : **composer rapidement une interface à partir de briques existantes.**

---

# 🥷 Ninja Challenge

Vous avez terminé la partie obligatoire ?

Très bien.

Maintenant, on va arrêter de vous tenir par la main.

### Bonus 1 — Autofocus

Lorsque la modale s'ouvre, le curseur doit automatiquement être placé dans le champ « Nom ».

Pour cela, vous allez devoir utiliser un peu de JavaScript.

Bootstrap déclenche notamment l'événement :

```javascript
shown.bs.modal
```

Vous pouvez écouter cet événement et demander au premier champ de recevoir le focus.

Indice :

```javascript
document.getElementById(...)
```

et :

```javascript
.focus()
```

Oui, il y a du JavaScript.

Non, vous n'allez pas exploser.

---

### Bonus 2 — Rendez le formulaire responsive

Actuellement :

```html
<div class="col-6">
```

signifie que chaque champ prend la moitié de la largeur.

Essayez de faire en sorte que :

- les champs soient empilés sur mobile ;
- ils passent en deux colonnes à partir de `lg`.

Indice :

```html
col-12 col-lg-6
```

Vous venez de réutiliser ce que vous avez appris au chapitre 4.

La boucle est bouclée.

---

### Bonus 3 — Personnalisez votre modale

Changez :

- le titre ;
- les icônes ;
- les couleurs ;
- les textes ;
- les choix du formulaire.

Vous pouvez même remplacer « Engager » par un véritable appel à l'action.

Mais attention :

**ne transformez pas votre formulaire en sapin de Noël Bootstrap.**

Quelques classes bien choisies valent mieux que 38 classes empilées sur chaque `<div>`.

---

# 📚 À retenir

À la fin de ce chapitre, vous devez comprendre :

- comment déclencher une modale avec `data-bs-toggle` ;
- comment cibler une modale avec `data-bs-target` ;
- comment structurer une `modal` ;
- comment utiliser les composants de formulaire Bootstrap ;
- comment utiliser la grille dans un formulaire ;
- comment utiliser `shown.bs.modal` en JavaScript ;
- comment donner le focus à un champ avec `.focus()`.

Et surtout :

> Vous n'avez pas besoin de connaître Bootstrap par cœur.

Vous devez savoir **chercher dans la documentation et comprendre ce que vous copiez.**

Un développeur qui connaît 2 000 classes Bootstrap par cœur est probablement quelqu'un qui a besoin de sortir prendre l'air.

Un développeur qui sait retrouver la bonne classe dans la documentation est déjà beaucoup plus dangereux.

---

## 🏆 Objectif final

Votre page doit permettre de :

1. cliquer sur **Engager** dans la navbar ;
2. ouvrir une modale Bootstrap ;
3. afficher un formulaire ;
4. saisir ses informations ;
5. choisir une prestation ;
6. envoyer le formulaire ;
7. fermer la modale.

Et si vous avez réalisé le bonus :

8. le curseur arrive directement dans le champ « Nom ».

**Félicitations : vous venez de passer du simple assemblage de composants à une véritable interaction utilisateur.**

La voie du Ninja commence à devenir sérieuse.