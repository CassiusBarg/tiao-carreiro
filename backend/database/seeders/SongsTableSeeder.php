<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SongsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('songs')->insert([
            [
                'title' => 'Pagode em Brasília',
                'url' => 'https://www.youtube.com/watch?v=lpGGNA6_920&list=RDlpGGNA6_920&start_radio=1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Chico Mineiro',
                'url' => 'https://www.youtube.com/watch?v=MC7pKwb5PZA&list=RDMC7pKwb5PZA&start_radio=1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Boi Soberano',
                'url' => 'https://www.youtube.com/watch?v=yHtvFcckX8A&list=RDyHtvFcckX8A&start_radio=1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Rio de Lágrimas',
                'url' => 'https://www.youtube.com/watch?v=FxXXvPL3JIg&list=RDFxXXvPL3JIg&start_radio=1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Cochilou Cachimbo Cai',
                'url' => 'https://www.youtube.com/watch?v=rnEMZs3VrNo&list=RDrnEMZs3VrNo&start_radio=1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
