<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    protected $table = 'team';
    protected $fillable = array('name', 'description');
}
