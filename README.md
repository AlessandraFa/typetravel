# IMWT-project-repo


### Git commands

- git pull (per scaricare cartella aggiornata)
- git add . (per aggiungere al commit le modifiche salvate)
- git commit -m "name of the commit es. added index.html" (per fare il commit della modifica o di più modifiche)
- git status (per vedere quali modifiche sono da aggiungere (in rosso) e quali sono da committare (in verde))


### Git setup 
1. installa git https://git-scm.com/download/win  e verifica l'installazione

2. crea cartella (dove vuoi sul tuo pc) dove clonare repository github

3. configura git 
    git config --global user.name "<il tuo nome / username (non deve per forza essere quello di github ma falli corrispondere che è meglio)>"
    git config --global user.email "<tua email usata per login su github>"

3. apri cartella con VScode (apri terminale vai sulla cartella e poi usa il comando code . e si apre automaticamente)

   ![initialize_git_openfolder_vscode](https://user-images.githubusercontent.com/72916575/132127210-ccb3f2e9-3388-4a6c-bcc0-899573a78bb8.png)

4. apri terminal di vscode (ctrl+shift+ò) -> in alto a destra schiaccia sull'icona di fianco al + del terminale e dovresti vedere tra le opzioni git bash
    -> apri nuovo terminale git bash su vscode 
    
   ![open-gitbash-inside-vscode](https://user-images.githubusercontent.com/72916575/132126817-566ee417-bbb7-4bef-ac8e-eded026a61f4.png)
   
5. clona repository di github sul tuo pc usando il comando git clone https://github.com/edoardodalborgo/imwt-project.git

   ![git-clone](https://user-images.githubusercontent.com/72916575/132127471-61f36ea5-cd5c-4816-a44b-25e045a5e413.png)

6. ora hai creato una cartella che rimane legata alla repository, dove puoi lavorare in locale con git e poi una volta terminato il lavoro pusharla su github. 

## Comandi Git

- quando inizi a lavorare al progetto apri la cartella in vscode con il terminale git bash e usa il comando "**git pull**" che ti scaricherà dalla repository online gli aggiornamenti più recenti

- ogni volta che fai una modifica e salvi un file, per rendere la modifica effettiva nella cronologia di git devi prima aggiungere la modifica al commit
  tramite il comando **git add .** 
    
- puoi verificare lo stato della tua modifica usando il comando **git status** (output rosso = file salvato e modificato ma non aggiunto al commit, output verde = file aggiunto pronto per il commit)

  es. ho modifica il file readme dal mio pc, ora devo aggiungerlo al commit 
    
  ![gitadd-gitstatus](https://user-images.githubusercontent.com/72916575/132129206-e1b6947c-e561-411c-9e91-5028cc93224a.png)
    
    Ora la modifica a readme è pronta per il commit (che viene eseguito sul tuo computer in locale, non viene messo online sulla repository).
    
- commit -> **git commit -m "<nome della modifica/commit>"**
    
  Per caricare il commit online sulla repository di github bisogna usare il comando push, ma prima di effettuare il push si può controllare se il nostro   progetto git è inizializzato alla nostra repository in remoto tramite il comando remote.

- remote -> **git remote**

- push -> **git push -u origin master**
    
    ![commit+push](https://user-images.githubusercontent.com/72916575/132129253-fd326c2b-7012-4c38-b29d-bfb6e6716108.png)
    
  

   
   

    
 
