# SR : Sailsjs React

## template
server: Sailsjs
client: React


## build server
cd  server
npm install


## Sailsjs serve React

cd client
npm install
npm run build
cp -rfv   /client/build/* /server/assets

# run server
npm run start
# OR
npm run dev
