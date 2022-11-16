#!/bin/bash
npx prisma migrate dev

npm i && npm run test && npm run dev