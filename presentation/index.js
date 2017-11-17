// Docker commande : docker container run --rm -v /home/nicolas/Prez/CapDuLibre/Slides:/app:rw -p "80:8080" -d --name cap  prez:cap
// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Notes,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  traefik: require("../assets/figures/traefik.logo.svg"),
  docker: require("../assets/figures/docker-logo.png"),
  java : require("../assets/figures/DockerJava02.png"),
  dockerFriends : require("../assets/figures/DockerFriends.png"),
  dockerSticker : require("../assets/figures/DockerSticker.png"),
  dockerLove : require("../assets/figures/DockerLove02.png"),
  priere: require("../assets/figures/priere.jpg"),
  traefikSticker: require("../assets/figures/traefik.sticker.png"),
  greatBut: require("../assets/figures/greatBut.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#37ABC8",
  white: "#e2e2e2",
  secondary: "#1F2022",
  tertiary: "#e2e2e2",
  quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Lobster Two"
  });

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={300} theme={theme}>

          <Slide bgColor="white">
            <Image src={images.docker.replace("/", "")} margin="0px auto 20px" fit height="200" />
            <Heading fit textColor="primary">
              Comment j&apos; ai transformé
            </Heading>
            <Heading fit textColor="black">
              mon poste de développement
            </Heading>
            <Heading fit caps textColor="primary">
              en porte containers
            </Heading>
            <Text margin="40" >Nicolas Mengin — Capitole du Libre 2017</Text>
          </Slide>

        <Slide>
          <Heading size={4} textColor="black">
            $ docker inspect me
            </Heading>
          <Appear><List fit textColor="white">
            <ListItem>Développeur & DevOps</ListItem>
          </List></Appear>
          <Appear><List fit textColor="white">
            <ListItem>Développeur @ Containous</ListItem>
            <ListItem>Mainteneur de <Link href="https://traefik.io">traefik.io</Link></ListItem>
          </List></Appear>
          <Appear><List fit textColor="white">
            <ListItem>❤Java Family, GO, Shell, Docker World❤</ListItem>
          </List></Appear>
        </Slide>

        <Slide bgColor="white">
          <Heading size={4} textColor="black">
            $ docker inspect you
            </Heading>
          <List fit textColor="primary">
            <Appear><ListItem>Connaissances de base de Docker</ListItem></Appear>
            <Appear><ListItem>Développeurs curieux</ListItem></Appear>
            <Appear><ListItem>Ops ouverts</ListItem></Appear>
            <Appear><ListItem>DevOps</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={3} fit textColor="black">
            $ docker build -t presentation:today .
            </Heading>
            <List fit textColor="white">
              <Appear><ListItem>Layer 1 : Installations de Docker</ListItem></Appear>
              <Appear><ListItem>Layer 2 : Containerisation Stack J2E</ListItem></Appear>
              <Appear><ListItem>Layer 3 : Intégration d&apos;outils externes</ListItem></Appear>
            </List>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            Quelle est la meilleure
            </Heading>
          <Heading size={1} fit caps>
            installation de Docker
            </Heading>
          <Heading size={1} fit caps textColor="primary">
            pour moi?
            </Heading>
        </Slide>

        <Slide>
          <Heading fit size={2}>
          $ docker build -t install:linux .
          </Heading>
          <List fit textColor="white">
            <ListItem>Ajouter le repo Docker</ListItem>
            <ListItem>Installer Docker-Engine</ListItem>
            <ListItem>Installer Docker-Compose</ListItem>
            <ListItem bold>!! LTS, Compatibilité de versions !!</ListItem>
          </List>
          <Appear><List fit textColor="white">
            <ListItem  bold>Industrialisation :</ListItem>
            <List fill  margin="0px 0px 0px 40px"  textColor="white">
              <ListItem>apt-get/yum + pip (docker-compose)</ListItem>
              <ListItem>Script (Ansible) pour le tuning</ListItem>
              <ListItem bold>!! Droits root !!</ListItem>
            </List>
          </List></Appear>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            <h4>INDUS (100 lignes)</h4>
            <ol>
              <li>Opérations HOTE et VM : pas tout auto</li>
              <li>Déplacement disque HOTE</li>
              <li>Création répertoire partagé HOTE</li>
              <li>Modification taille HOTE et VM</li>
              <li>Install compose/ssh... dans VM</li>
            </ol>
          </Notes>
          <Heading fit size={2}>
          $ docker build -t install:win-not-10-pro .
          </Heading>
          <List fit textColor="primary">
            <ListItem>Installer un outil de virtualisation</ListItem>
            <ListItem>Installer Docker Tool Box</ListItem>
            <ListItem>Engine, Compose, Machine</ListItem>
            <ListItem bold>!! Issues dues à la Virtualisation !!</ListItem>
            </List>
          <Appear><List fit textColor="primary">
            <ListItem  bold>Industrialisation :</ListItem>
            <List fill  margin="0px 0px 0px 40px"  textColor="primary">
              <ListItem>Plusieurs scripts</ListItem>
              <ListItem>Script de création de la VM</ListItem>
              <ListItem>Scripts de tuning (hôte & VM)</ListItem>
            </List>
          </List></Appear>
        </Slide>

        <Slide>
        <Notes>
          <h4>VM MOBY</h4>
          VM Moby construite via LinuxKit
          Unikernel, Linuxkit, sans doute futur de Docker.
          Faire des recherches sur LinuxKit.
          Parler de la vidéo de Devoxx (Richard Mortier)
            <h4>INDUS</h4>
            <ol>
              <li>Fichier de conf en json</li>
              <li>Toiut peut être fait dans l''IHM  d''admin</li>
              <li>Fix : date/heure désynchro</li>
              <li>Fix : perte disque partagé après modif passwd</li>
            </ol>
        </Notes>
        <Heading fit size={2}>
        $ docker build -t install:win-10-pro_mac-osx .
        </Heading>
          <List fit textColor="white">
            <ListItem>Installer Docker4Windows/Mac (D4D) </ListItem>
            <ListItem>Engine, Compose, Machine...</ListItem>
            <ListItem>Kubernetes! (experimental) </ListItem>
            <ListItem>VM sur un Hyperviseur natif</ListItem>
            <ListItem bold>!! Outil jeune, nombreuses issues !!</ListItem>
          </List>
          <Appear><List fit textColor="white">
            <ListItem  bold>Industrialisation :</ListItem>
            <List fill  margin="0px 0px 0px 40px"  textColor="white">
              <ListItem>Tuning fichier json</ListItem>
              <ListItem bold> !! Fixes pas scriptables (Windows) !!</ListItem>
            </List>
          </List></Appear>
        </Slide>


        <Slide bgColor="white">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>D4D utilisé en interne chez Docker</li>
            </ol>
          </Notes>
          <Heading fit size={2}>
          $ docker inspect install:my-opinion
          </Heading>
          <List fit textColor="primary">
            <Appear><ListItem>(Dev)Ops : Favoriser Linux (VM)</ListItem></Appear>
            <Appear><ListItem>Développeurs : D4D bonne alternative</ListItem></Appear>
            <Appear><ListItem>Eviter Docker Tool Box</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            Dockerisation
            </Heading>
          <Heading size={1} fit caps>
             d&apos;une application J2E
            </Heading>
        </Slide>

        <Slide bgColor="primary">
        <Notes>
          <h4>Notes</h4>
          <ol>
            <li>Parler experience en SS2I avec plusieurs JBoss, SGBD voire eclipse</li>
            <li>Parler des différentes version d un soft entre branche master et hotfix</li>
            <li>Evoquer programme MTA de Docker avec DCA mais que ce n&apos;est pas le but dela prez</li>
          </ol>
          <h2>!!! ARRETER JBOSS !!!</h2>
        </Notes>
          <Heading fit size={4}>
          $ docker inspect kitchensik:no-docker
          </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Développement : JBoss & DB H2</ListItem></Appear>
            <List margin="0px 0px 0px 40px"  fill textColor="white">
              <Appear><ListItem>Rapide à mettre en place</ListItem></Appear>
            </List>
            <Appear><ListItem>Production : </ListItem></Appear>
            <List margin="0px 0px 0px 40px"  fill textColor="white">
              <Appear><ListItem>RP/Srv_web/Srv_app/DB</ListItem></Appear>
              <Appear><ListItem>Traefik/Nginx/JBoss/MariaDB</ListItem></Appear>
              <Appear><ListItem>Développement != Production</ListItem></Appear>
            </List>
          </List>
            <Appear><List>
            <ListItem textColor="white">Installer tous les outils?</ListItem>
              <List margin="0px 0px 0px 40px"  fill textColor="white">
                <ListItem>Installations complexes</ListItem>
                <ListItem>Nombre d&apos;environnements</ListItem>
              </List>
          </List></Appear>
        </Slide>

        <Slide bgColor="white">
          <Heading textColor="primary" fit caps bold size={1}>
          Let&apos;s go to Docker
          </Heading>
          <Image  src={images.java.replace("/", "")} />
          <Appear><Heading size={2} >
            #HopeNoOvhEffect
          </Heading></Appear>
        </Slide>

        <Slide bgColor="primary">
        <Notes>
          <h4>Registries</h4>
          <ol>
            <li>Docker Registry : Docker, Nexus 3!!</li>
          </ol>
          <h4>Développeurs</h4>
          <ol>
            <li>Parler expérience deployer</li>
          </ol>
        </Notes>
        <Heading fit size={2}>
        $ docker inspect dockerization:industrialization
        </Heading>
          <Appear><List fit textColor="white">
            <ListItem>Partage des images : Docker Registry</ListItem>
            <ListItem>Partage des fichiers : SCM</ListItem>
            <ListItem bold>!! Ne pas cacher Docker !!</ListItem>
        </List></Appear>
        </Slide>

        <Slide bgColor="white">
        <Notes>
          <h4>Bilan sur sa mise en place</h4>
          <ol>
            <li>Evolution des versions plus facile (rarement faite avant)</li>
            <li>Pas plus de stabilité (D4D, Eclipse)</li>
          </ol>
        </Notes>
          <Heading fit size={2}>
          $ docker inspect dockerization:feedback
          </Heading>
          <Appear><List fit textColor="primary">
            <ListItem bold>Gain de temps</ListItem>
            <List margin="0px 0px 0px 40px"  fill textColor="primary">
              <ListItem>Mise en place</ListItem>
              <ListItem>Changement branche/projet</ListItem>
            </List>
            </List></Appear>
          <List fit textColor="primary">
            <Appear><ListItem>Evolution versions + facile</ListItem></Appear>
            <Appear><ListItem bold>!! Pas plus de stabilité !!</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="black">
          <Image fit src={images.greatBut.replace("/", "")} margin="0px 0px 100px 0px" height="400px"/>
          <Heading size={3} fill caps textColor="primary">
            Et les application modulaires?
          </Heading>
        </Slide>

        <Slide bgColor="black">
        <Notes>
          <h4>parler problématque µservices avec tous les sytèmes</h4>
        </Notes>
          <Heading size={1} fit caps textColor="primary">
            Intégration
            </Heading>
          <Heading size={1} fit caps>
             d&apos;outils externes
          </Heading>
          <Appear><Image fit src={images.traefik.replace("/", "")} margin="50px 0px 0px 0px" height="400px"/></Appear>
        </Slide>

        <Slide bgColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Projet OS, nbx dev => pas tt installer sur leurs postes!</li>
              <li>CI en mode SAAS Travis, SemaphoreCI, utilisation de Docker</li>
              <li>Dire qu''on l''utilise aussi pour compiler les sources</li>
            </ol>
          </Notes>
          <Heading fit size={4}>
          $ docker inspect traefik:awesome
          </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Reverse Proxy Dynamique Open Source</ListItem></Appear>
            <Appear><ListItem>S&apos;interface avec de nombreux outils :</ListItem></Appear>
            <Appear><List margin="0px 0px 0px 40px" fill textColor="white">
              <ListItem>Docker (Swarm-Mode), Kubernetes...</ListItem>
              <ListItem>ETCD,Consul,Eureka...</ListItem>
              <ListItem>Let&apos;s Encrypt</ListItem>
            </List></Appear>
          </List>
          <Appear><List fit textColor="white">
            <ListItem>Problématique :</ListItem>
            <List margin="0px 0px 0px 40px" fill textColor="white">
              <ListItem>Tests en local</ListItem>
              <ListItem>Performances plateforme CI</ListItem>
            </List>
          </List></Appear>
          <Appear><Heading textColor="white" fit caps bold size={4}>
          Docker is (still) the solution
          </Heading></Appear>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Expliquer la complexité de la stack bouler</li>
            </ol>
          </Notes>
          <Heading fit size={4}>
          $ docker inspect traefik:ha
          </Heading>
          <List fit textColor="primary">
            <Appear><ListItem>Notion de leader/workers</ListItem></Appear>
          </List>
          <Appear><List fit textColor="primary">
            <ListItem>Utilisation d&apos;un KV store externe :</ListItem>
            <List margin="0px 0px 0px 40px" fill textColor="primary">
              <ListItem>Partage de la configuration</ListItem>
              <ListItem>Partage des certificats LE</ListItem>
              <ListItem>Utilisation de docker/libkv</ListItem>
            </List>
          </List></Appear>
          <Appear><List fit textColor="primary">
            <ListItem bold>Problématique :</ListItem>
            <List margin="0px 0px 0px 40px" fill textColor="primary">
              <ListItem>Migration libkv vers fork</ListItem>
              <ListItem>Tester tous les KV stores</ListItem>
              <ListItem>Tester Let&apos;s Encrypt</ListItem>
            </List>
          </List></Appear>
        </Slide>

        <Slide bgColor="black">
          <Heading caps size={1} textColor="white" >
            Demo
          </Heading>
          <Image fit src={images.priere.replace("/", "")} height="500" padding="20" />
        </Slide>

        <Slide bgColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Pas de pollution avec des softs externes</li>
              <li>Pas de temsp à installer configurer : tout est sur Docker Hub</li>
              <li>Meilleure plateforme de test du produit que libkv</li>
            </ol>
          </Notes>
          <Heading fit size={2}>
          $ docker inspect migration:results
          </Heading>
          <List fit textColor="white">
            <Appear><ListItem>Tests manuels de tous les cas</ListItem></Appear>
            <Appear><ListItem>TI (en cours) avec Docker</ListItem></Appear>
            <Appear><ListItem>Comparaisons/Rollback rapides</ListItem></Appear>
            <Appear><ListItem bold>Aucune installation</ListItem></Appear>
          </List>
          <Appear><Heading textColor="white" fit caps bold size={4}>
          Beaucoup plus compliqué sans Docker!
          </Heading></Appear>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} fit caps textColor="primary">
            Conclusion
            </Heading>
          <Image fit src={images.dockerFriends.replace("/", "")} margin="100px 0px 0px 0px" height="400px"/>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            <h4>+ efficace</h4>
            <ol>
              <li>Mise en place de l''environnement + rapide</li>
              <li>Environnement similaire à la PROD</li>
              <li>voir + vite les problèmes de PROD</li>
            </ol>

            <h4>Pas tout dockeriser</h4>
            <ol>
              <li>trouver un curseur</li>
              <li>Exemple Eclipse ds Docker VS moi et NPM</li>
              <li>Dépend de l''utilisation des produits</li>
            </ol>

            <h5>Docker à la mode mais pas que ET s''impose => dire contraire est mentir</h5>
            <h4>Moteur => POC + montrer gain de tps</h4>

            <h4>NOT PROD</h4>
            <ol>
              <li>Docker PROD compliant mais pas ttes les applis</li>
              <li>Docker aide avec MTA (DAC) pour app legacy => Pas de retours, c nouvo</li>
              <li>Problématiques différentes en PROD : orchestration scalabilité => bcp de support</li>
              <li>Dev de pas tout faire seuls... ou sur le CLOUD</li>
            </ol>
          </Notes>
          <Heading fit size={2}>
          $ docker inspect docker:my-opinion
          </Heading>
          <List fit textColor="primary">
            <Appear><ListItem>Simplifie la vie</ListItem></Appear>
            <Appear><ListItem>Plus efficace sur les projets</ListItem></Appear>
            <Appear><ListItem caps bold>!! Ne pas tout Dockeriser !!</ListItem></Appear>
          </List>
          <List fit textColor="primary">
            <Appear><ListItem>Devient un standard</ListItem></Appear>
            <Appear><ListItem>Développeurs peuvent être moteur</ListItem></Appear>
            <Appear><ListItem caps bold>!! DEV != INTE != PROD !!</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgColor="primary" >
          <Heading size={1} caps textColor="white" margin="0px 0 50px 0px"  >
            Références
          </Heading>
          <List fill textColor="white">
            <ListItem><Link href="https://www.youtube.com/watch?v=KMttioiBQc0">www.youtube.com/DockerToolBox</Link></ListItem>
            <ListItem><Link href="https://www.youtube.com/watch?v=f8uQ3ecEutY">www.youtube.com/Unikernels</Link></ListItem>
            <ListItem><Link href="https://github.com/nmengin/jboss-eap-quickstarts">github.com/.../jboss-eap-quickstarts</Link></ListItem>
            <ListItem><Link href="https://github.com/nmengin/traefik/tree/feature/libkv-migration">github.com/.../libkv-migration</Link></ListItem>
            <ListItem><Link href="https://github.com/nmengin/capitoledulibre/tree/2017">github.com/nmengin/capitoledulibre/...</Link></ListItem>
            <ListItem><Link href="https://hub.docker.com/r/nmengin/presentation/">hub.docker.com/r/nmengin/...</Link></ListItem>
            <ListItem><Link href="https://github.com/containous/traefik/">github.com/containous/traefik</Link></ListItem>
          </List>
        </Slide>

        <Slide bgColor="white">
          <Heading size={1} caps textColor="primary" textSize="170">
            Il y a
            </Heading>
          <Image src={images.traefikSticker.replace("/", "")} height="200" margin="0px 100px 0px 0px" />
          <Image src={images.dockerSticker.replace("/", "")} height="200" />
          <Heading size={1} caps textColor="primary">
            des Stickers!
            </Heading>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} caps textColor="white" >
            Merci!
          </Heading>
          <Image src={images.dockerLove.replace("/", "")} height="400px" margin="50px 0px 50px 0px"  />
          <Text >
            <Link href="https://twitter.com/@nicomengin">@nicoMengin</Link>
          </Text>
          <Text >
            <Link href="https://github.com/nmengin">github.com/nmengin</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
