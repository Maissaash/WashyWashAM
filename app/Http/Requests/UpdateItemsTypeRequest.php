<?php

namespace App\Http\Requests;

use Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateItemsTypeRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('items_type_edit');
    }

    public function rules()
    {
        return [
            'title' => [
                'required',
            ],
            'price' => [
                'required',
                'regex:/^\d+(\.\d{1,2})?$/'
            ],
        ];
    }
}
