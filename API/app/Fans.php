<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fans extends Model
{
    protected $table = 'fan';
    protected $fillable = array('cedula','name','lastName','TeamId');
}
