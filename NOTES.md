# Starting project with NestJS

## Create project

```bash
$ nest new `project-name`
```

## Install multer

```bash
npm i -D @types/multer
```

## Creating a module

```bash
# Example `modules/upload`
# --no-spec to not create a test file
$ nest g module `module-name` --no-spec
```

and Select `REST API`
you can also generate the `CRUD` ao switch `yes` or `no`

## Install Supabase

```bash
npm i @supabase/supabase-js
```

## Using .env

```bash
npm i @nestjs/config
```

In `app.module.ts` add

```ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
```
