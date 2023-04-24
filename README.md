## capitalquiz

# Workflow Git :
    - Les commits seront fait de manière fréquente avec 'git-cz'.
    - Les commits seront détaillés de cette façon et fréquemment : [FEAT/FIX/DELETE/SETUP] nom-branche detail-message
    - Chaque fonctionnalités necéssite la création d'une nouvelle branche 'feature'.
    - Toute branche de fonctionnalités utilisent une branche 'develop' comme branche parente.
    - Chaque merge est soumis à une pull request.
    - Une fois la pull request accepté et le merge réalisé la branche est supprimé.
    - Lorsqu'il y a merge sur master toute les branches liés sont rebase.
    - Une fois que la branche 'develop' aura acquis assez de fonctionnalités une branche 'release' sera créer.
    - La création de la branche 'release' empêche la création de fonctionnalités supplémentaire et sera destiné à la correction de bugs.
    - Une fois terminé la branche 'release' est mergé dans la branche principale 'main' et sera détruite.
    - A chaque push/merge sur master le projet est redeployé.
    - Les versions de release seront tagués pour assurer une agilité de version. 

    *photo workflow projet*

# Découpage du projet : 

    - 



