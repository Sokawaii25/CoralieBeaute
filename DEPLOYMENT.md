# Guide de déploiement - Coralie Beauté

## 📦 Fichiers de production

Après avoir exécuté `npm run build`, tous les fichiers statiques sont générés dans le dossier `dist/`.

## 🚀 Déploiement sur votre serveur web

### Option 1: Upload FTP/SFTP

1. Connectez-vous à votre serveur via FTP/SFTP
2. Uploadez tout le contenu du dossier `dist/` vers le répertoire racine de votre site (généralement `public_html/` ou `www/`)
3. Structure après upload:
   ```
   public_html/
   ├── assets/
   │   ├── index-*.css
   │   └── index-*.js
   ├── index.html
   └── vite.svg
   ```

### Option 2: Serveur avec SSH

```bash
# Depuis votre ordinateur, copiez les fichiers vers le serveur
scp -r dist/* user@votre-serveur.com:/chemin/vers/public_html/

# Ou en utilisant rsync
rsync -avz dist/ user@votre-serveur.com:/chemin/vers/public_html/
```

### Option 3: Hébergement statique

Le site peut être déployé sur n'importe quel hébergement de fichiers statiques:

- **Netlify**: Glissez-déposez le dossier `dist/`
- **Vercel**: Connectez le repo GitHub ou uploadez le dossier
- **GitHub Pages**: Poussez le contenu de `dist/` vers la branche `gh-pages`
- **Firebase Hosting**: Utilisez `firebase deploy`

## ⚙️ Configuration du serveur web

### Apache (.htaccess)

Si vous utilisez Apache, créez un fichier `.htaccess` dans le dossier de déploiement:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache les fichiers statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Nginx

Configuration pour Nginx:

```nginx
server {
    listen 80;
    server_name coraliebeaute.com www.coraliebeaute.com;
    root /var/www/coraliebeaute;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache les fichiers statiques
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compression gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

## 🔄 Mise à jour du site

Pour mettre à jour le site:

1. Modifiez les fichiers source dans `src/`
2. Exécutez `npm run build`
3. Uploadez le nouveau contenu de `dist/` vers votre serveur (écrasez les anciens fichiers)

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
