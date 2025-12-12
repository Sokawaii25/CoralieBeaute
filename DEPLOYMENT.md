# Guide de déploiement - Coralie Beauté

## 📦 Fichiers de production

Après avoir exécuté `npm run build`, tous les fichiers statiques sont générés dans le dossier `dist/`.

## 🚀 Déploiement

Le site peut être déployé sur n'importe quel serveur web capable de servir des fichiers statiques (Apache, Nginx, etc.).
Sa version de production est déployée sur les serveurs de Informagic'Landes (https://www.informagic-landes.fr/) à l'adresse https://coralie-beaute.informagic-landes.fr.

## 🔄 Mise à jour du site

La mise à jour du site est entièrement automatisée via GitHub Actions. À chaque push sur la branche `main`, le workflow de déploiement est déclenché, construisant le projet et transférant les fichiers vers le serveur via SSH.

## ✅ Vérification après déploiement

1. Vérifiez que le site se charge correctement
2. Testez la navigation entre les sections (Services, Présentation, Tarifs)
3. Vérifiez le menu hamburger sur mobile
4. Testez les liens de contact et réseaux sociaux
5. Vérifiez la responsive sur différents appareils

## 📱 Test en local avant déploiement

```bash
# Construire et prévisualiser
npm run build
npm run preview
```

Le site sera accessible à `http://localhost:4173/`

## 🆘 Support

Pour toute question ou problème de déploiement, consultez:
- [Documentation Vite](https://vite.dev/guide/static-deploy.html)
- [Documentation Vue.js](https://vuejs.org/guide/best-practices/production-deployment.html)
