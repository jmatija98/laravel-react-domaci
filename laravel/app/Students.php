<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    public function homework()
    {
        return $this->hasMany(Homework::class);
    }
}
