<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenses extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'amount', 'description', 'date', 'user_id'];
    public $timestamps = false;

    public function scopeOfUser(Builder $query, int $userId): void
    {

        $query->where('user_id', $userId);
    }
}
