// Define a class named BudgetCalculator
class BudgetCalculator {
    constructor() {
        this.income = [];
        this.expense = [];
    }

    addIncome(amount) {
        this.income.push(amount);
    }

    addExpense(amount) {
        this.expense.push(amount);
    }

    calculateTotalIncome() {
        return this.income.reduce((total, income) => total + income, 0);
    }

    calculateTotalExpense() {
        return this.expense.reduce((total, expense) => total + expense, 0);
    }

    calculateRemainingBudget() {
        return this.calculateTotalIncome() - this.calculateTotalExpense();
    }
}

// Instantiate a new BudgetCalculator object
const budgetCalculator = new BudgetCalculator();

// Function to add new income
function addIncome(amount) {
    budgetCalculator.addIncome(amount);
}

// Function to add new expense
function addExpense(amount) {
    budgetCalculator.addExpense(amount);
}

// Function to update the UI with calculated values
function updateUI() {
    document.getElementById('incomeTotal').textContent = "Income total: $" + budgetCalculator.calculateTotalIncome().toFixed(2);
    document.getElementById('expenseTotal').textContent = "Expense total: $" + budgetCalculator.calculateTotalExpense().toFixed(2);
    document.getElementById('remainingBudget').textContent = "Remaining budget: $" + budgetCalculator.calculateRemainingBudget().toFixed(2);
}

// Add event listener for form submission (calculate)
document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    updateUI(); // Update UI with calculated values
});

// Add event listener for adding income
document.getElementById('addIncome').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const incomeInput = parseFloat(document.getElementById('incomeSource').value);
    if (!isNaN(incomeInput)) {
        addIncome(incomeInput);
        addInput('incomeSource', incomeInput, 'incomeInputs');
    }
});

// Add event listener for adding expense
document.getElementById('addExpense').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const expenseInput = parseFloat(document.getElementById('expenseSource').value);
    if (!isNaN(expenseInput)) {
        addExpense(expenseInput);
        addInput('expenseSource', expenseInput, 'expenseInputs');
    }
});

// Function to dynamically add input and update UI
function addInput(_inputId, inputValue, containerId) {
    const container = document.getElementById(containerId);
    const newInput = document.createElement('input');
    newInput.type = 'number';
    newInput.value = inputValue;
    container.appendChild(newInput);
    updateUI(); // Update UI with the initial values after adding input
}

// Function to validate input
function isValidInput(input) {
    return input.trim() !== '' && !isNaN(input);
}

// Add event listener for adding income
document.getElementById('addIncome').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const incomeInput = parseFloat(document.getElementById('incomeSource').value);
    if (!isNaN(incomeInput) && isValidInput(incomeInput)) {
        addIncome(incomeInput);
        addInput('incomeSource', incomeInput, 'incomeInputs');
        updateUI(); // Update UI after adding income
    } else {
        alert('Please enter a valid income amount.');
    }
});

// Add event listener for adding expense
document.getElementById('addExpense').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const expenseInput = parseFloat(document.getElementById('expenseSource').value);
    if (!isNaN(expenseInput) && isValidInput(expenseInput)) {
        addExpense(expenseInput);
        addInput('expenseSource', expenseInput, 'expenseInputs');
        updateUI(); // Update UI after adding expense
    } else {
        alert('Please enter a valid expense amount.');
    }
});
