## Étape 4:
- Nous allons maintenant utiliser la grille 12 colonnes pour créer une hero-section responsive centrée sur mobile et tablette, et sur 2 fois six colonnes à partir de lg soit 50% de la page et 50% restant de la page, col-12 col-lg-6.
- La convention veut que nous utilisions container->row->col donc lisez la documentation sur la grille.
- L'image Hero doit être à droite sur desktop (à partir de lg 992px). Utilisez la propriété flex-column-revere et flex-lg-row dans les classes de la row. En effet le flex ce fait du parent à l'enfant. D'ailleurs, n'oubliez pas, les .row sont déjà en d-flex par defaut !
- Nous avons crée une hero section responsive ; changer la taille du viewport pour voir la magie opérer. Nous n'avons écrit aucune média queries, Bootstrap le fait sous le capot.
