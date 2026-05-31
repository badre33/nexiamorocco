# Stand-by — À traiter dans quelques jours

Items en attente, à reprendre quand le timing sera bon. Mis à jour le 2026-05-31.

## 1. Brochure téléchargeable depuis le formulaire de contact
- **État** : non commencé. Brochure pas encore finalisée côté Nexia Morocco.
- **Quand** : dès que le PDF final est prêt côté Badre.
- **Action** : implémenter l'option B (cf. `AUDIT_BRAND.md` section brochure) — bucket Supabase Storage `marketing-assets`, déclencheur après submit du `ContactForm`, lien direct dans le toast de confirmation.
- **Temps estimé** : 30 min une fois le PDF fourni.

## 2. Migration SQL Supabase (back-office)
- **État** : fichier prêt à `supabase/migrations/20260527000000_init_back_office.sql`, **non exécuté**.
- **Bloquant pour** : persistance des demandes contact, espace collaborateurs, portail client.
- **Action** : ouvrir Supabase dashboard → SQL Editor → coller le contenu du fichier → Run.

## 3. Rotation de la clé anon Supabase
- **État** : clé `VITE_SUPABASE_PUBLISHABLE_KEY` actuelle = celle qui était commitée dans `.env` historique git public.
- **Risque** : faible (clé anon ≠ service role) mais bonne pratique.
- **Action** : Supabase → Settings → API → Reset anon key → mettre à jour dans Netlify Environment Variables → redéployer.

## 4. Création du premier compte admin
- **État** : aucun admin en base.
- **Action** :
  1. Aller sur `https://nexiamorocco.com/auth/signup`
  2. S'inscrire avec un email `@nexiafiducia.ma` (sera auto-assigné rôle `collaborator`)
  3. Dans Supabase SQL Editor :
     ```sql
     update public.profiles
        set role = 'admin'
      where email = 'ton.email@nexiafiducia.ma';
     ```
  4. Se reconnecter — accès `/admin/*` débloqué.

## 5. Logos clients officiels — à fournir + intégrer
- **État** : `OurClients.tsx` refactoré en grille (12 cellules placeholder "Client 1", "Client 2", …).
- **Action requise** : Badre fournit les PNG/SVG des vrais logos clients (fond transparent idéalement).
- **Où** : déposer dans `public/clients/` puis éditer `OurClients.tsx` → remplacer chaque `src: null` par `src: "/clients/xxx.png"` et `name` par le nom réel.
- **Style** : les logos s'affichent en grayscale au repos, couleur au survol (effet pro standard).

## 6. Posts LinkedIn — bootstrap + workflow
- **État** : système prêt (table Supabase `linkedin_posts` + page `/admin/linkedin`).
- **Bloquant** : la migration SQL (item #2) doit avoir été exécutée — sinon la page admin affichera des erreurs et le site retombera sur la liste hardcodée de secours (`FALLBACK_POSTS`).
- **Workflow récurrent** : pour publier un nouveau post sur le site, copier l'ID du post depuis l'URL LinkedIn (ex. `…activity-7394411157484097537-…`), le coller dans `/admin/linkedin`, ordonner. Visible immédiatement.

## 7. Réduction navigation header de 6 à 5 items
- **État** : actuellement 6 items principaux (Accueil, Domaines d'expertise, Équipe Dirigeante, Insights, À propos, Contact).
- **Recommandation guide** : 5 items max.
- **Proposition** : regrouper "Équipe Dirigeante" dans un dropdown "À propos" (À propos → Notre histoire / Équipe dirigeante / Études de cas).
- **Décision** : en attente de validation de Badre.

---

## Quand on reprendra

Lire ce fichier + lire `AUDIT_BRAND.md` pour le contexte complet.
