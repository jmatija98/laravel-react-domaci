<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Homework extends Model
{
    public function students()
    {
        return $this->belongsTo(Students::class);
        $timestamps = false;
    }
}
