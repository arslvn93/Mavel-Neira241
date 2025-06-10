# Detailed Plan: Form Webhook Integration

The core of this plan is to create a reusable piece of logic (a custom React hook) that can be applied to all forms, making the solution clean, consistent, and easy to maintain.

## Phase 1: Create a Reusable `useForm` Hook

This hook will encapsulate all the logic for handling form state and submission.

1.  **File Creation:** A new file will be created at `hooks/useForm.js`.
2.  **State Management:**
    *   The hook will use the `useState` hook from React to manage three pieces of state:
        *   `formData`: An object to store the current values of the form inputs.
        *   `formState`: A string to track the submission status ('idle', 'submitting', 'success', 'error').
        *   `formError`: A string to store any error messages.
3.  **Input Change Handler:**
    *   A `handleChange` function will be created to update the `formData` state whenever a user types in an input field. It will be generic to handle any input type.
4.  **Submission Handler:**
    *   A `handleSubmit` function will be created to handle the form submission. When called, it will:
        *   Prevent the default browser form submission behavior.
        *   Set the `formState` to 'submitting'.
        *   Perform basic validation (e.g., check for empty required fields).
        *   If validation passes, it will send the `formData` as a JSON object in a POST request to your webhook URL: `https://n8n.salesgenius.co/webhook/agentsitesubmissions`.
        *   Based on the webhook's response, it will update the `formState` to either 'success' or 'error'.
5.  **Returned Values:** The hook will return the `formData`, `formState`, `formError`, `handleChange`, and `handleSubmit` functions so they can be used in the form components.

## Phase 2: Refactor the Form Components

I will then update each of the four identified forms to use the new `useForm` hook.

**For each form (`Contact.jsx`, `home-6/Contact.jsx`, `LoanCalculator.jsx`, `Faqs.jsx`):**

1.  **Import and Initialize:** I will import the `useForm` hook and initialize it with the specific fields for that form.
2.  **Connect Form to Hook:**
    *   The `<form>` element's `onSubmit` attribute will be set to the `handleSubmit` function from the hook.
    *   Each input, textarea, and select element will be connected to the hook's state and change handler.
3.  **Display User Feedback:**
    *   I will add elements to the forms to display feedback based on the `formState`.
        *   The submit button will be disabled when `formState` is 'submitting'.
        *   A success message (e.g., "Your message has been sent!") will be shown when `formState` is 'success'.
        *   An error message will be shown when `formState` is 'error'.

## Mermaid Diagram

```mermaid
graph TD
    subgraph Frontend (React Components)
        A[Contact Form] --> C{useForm Hook};
        B[Home Page Form] --> C;
        D[Loan Calculator] --> C;
        E[FAQ Form] --> C;
    end

    subgraph External Webhook
        F[https://n8n.salesgenius.co/webhook/agentsitesubmissions]
    end

    C -- JSON POST Request --> F;
    F -- Response --> C;