<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    public function students()
    {
        return $this->hasMany(Students::class);
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
}