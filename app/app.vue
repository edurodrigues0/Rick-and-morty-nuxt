<template>
  <main class="bg-slate-900 p-4 text-white min-h-screen flex flex-col justify-center">
    <section class="flex flex-col max-w-[1224px] w-full mx-auto gap-8">
      <div class="flex w-full items-center justify-center gap-4 mx-auto flex-wrap">
        <header class="flex items-center gap-4">
          <h2 class="font-bold text-2xl">Personagens</h2>
          
          <span class="flex items-center gap-2 py-1 px-2 bg-slate-600 rounded-2xl">
            <LayoutGridIcon :size="16" />
            Ver todos
          </span>
        </header>

        <div class="flex w-full items-stretch justify-center gap-4 mx-auto flex-wrap">
          <div
            v-for="currentCharacter of data?.results"
            class="w-full max-w-[294px] min-h-[400px] bg-slate-600 p-4 rounded-md flex flex-col gap-4"
          >
            <img
              :src="currentCharacter.image"
              :alt="currentCharacter.name" 
              class="rounded-2xl h-[200px] w-full object-cover"
            />

            <div class="grid grid-cols-[1fr,48px]">
              <div class="col-span-1 flex flex-col gap-4">
                <p class="text-base font-bold">{{ currentCharacter.name }}</p>

                <div class="flex flex-col gap-2">
                  <p>{{ currentCharacter.status === 'Alive' ? 'Vivo' : 'Morto' }}</p>
                  <p>{{ currentCharacter.species }}</p>
                  <p class="truncate">{{ currentCharacter.origin.name }}</p>
                </div>
              </div>

              <span>
                <HeartFilled v-if="currentCharacter.status === 'Alive'" />
                <HeartOutlined v-else />
              </span>
            </div>

            <NuxtLink
              :to="currentCharacter.url"
              class="flex items-center mt-auto gap-2 bg-slate-500 mt-2 self-end py-2 pl-3 pr-4 hover:bg-cyan-500 rounded-2xl transition-colors"
            >
              <InfoIcon :size="16" />
              Saiba mais
            </NuxtLink>
          </div>
        </div>
      </div>
  </section>
  </main>
</template>

<script lang="ts" setup>
  import { InfoIcon, LayoutGridIcon } from 'lucide-vue-next';
  import HeartOutlined from '../components/icons/HeartOutlined.vue';
  import HeartFilled from '../components/icons/HeartFilled.vue';

  interface Results {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }

  const {
    data,
  } = await useFetch<{ results: Results[] }>("https://rickandmortyapi.com/api/character")

  console.log(data.value?.results);
</script>