<?php

namespace App\Http\Controllers;

use App\Models\Expenses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExpensesController extends Controller
{
    //method to return data based on user_id
    public function idValue()
    {
        $userId = Auth::id();

        return Expenses::where('user_id', $userId);
    }

    //all get requests
    public function index(Request $request)
    {
        $userId = Auth::id();
        //if I have filters it calls the filterByMonth method
        if ($request->has('filter.month')) {
            return $this->filterByMonth($request);
        }

        $expenses = Expenses::where('user_id', $userId)->get();

        return $expenses;
    }

    public function show($id)
    {
        $expenses = $this->idValue()->find($id);

        return $expenses;
    }

    public function filterByMonth(Request $request)
    {
        // return $expenses;
        $month = $request->input('filter.month');

        // Filter expenses for the specified month
        $expenses = $this->idValue()->whereRaw('MONTHNAME(date) = ?', [$month])->orderBy('date', 'asc')->get();

        // Calculate the sum of the expense amounts
        $total = $expenses->sum('amount');

        if ($total == 0) {
            return response()->json(['message' => 'No expenses found within the specified month'], 204);
        }

        // Create an associative array containing both the expenses and the total
        $result = [
            'expenses' => $expenses,
            'total' => $total,
        ];

        // Return the associative array as part of the JSON response
        return response()->json($result);
    }

    //post request
    public function store(Request $request)
    {
        $userId = Auth::id();

        $data = $request->only(['title', 'amount', 'description', 'date']);
        $data['user_id'] = $userId;

        Expenses::create($data);

        return response()->json(['message' => 'Expense created successfully'], 200);
    }

    //put request
    public function update(Request $request, $id)
    {
        $expense = $this->idValue()->find($id);
        if (!$expense) {
            return response()->json(['error' => 'Expense not found'], 404);
        }
        $data = $request->only(['title', 'amount', 'description', 'date']);

        $expense->update($data);

        return response()->json(['message' => 'Expense updated successfully'], 200);
    }

    //delete request
    public function destroy($id)
    {
        try {
            // Search for spending by ID and try to eliminate it
            $expense = $this->idValue()->findOrFail($id);
            $expense->delete();

            return response()->json(['message' => 'Expense deleted successfully'], 200);
        } catch (\Exception $e) {
            // If there is an error, return a response with the error message
            return response()->json(['message' => 'Error deleting expense: ' . $e->getMessage()], 500);
        }
    }
}
