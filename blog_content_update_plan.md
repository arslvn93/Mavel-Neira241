# Plan to Correct Blog Post Content

This plan outlines the steps to correctly implement the new blog post content, ensuring it is structured properly and displayed correctly on the blog detail pages.

## Phase 1: Restructure `data/siteContent.js`

The current implementation for blog post details is a single placeholder object. This will be updated to support unique content for each post.

1.  **Create `postDetails` Array:** A new array named `postDetails` will be added to the `blog` object within `siteContent.js`.
2.  **Structure Post Content:** This array will contain objects, each corresponding to a blog post. Each object will have the following structure:
    *   `id`: A number that matches the ID of the post in the `posts` array.
    *   `paragraph1`: The first paragraph of the blog post.
    *   `quote`: A quote from the blog post.
    *   `quoteAuthor`: The author of the quote.
    *   `paragraph2`: The second paragraph of the blog post.
    *   `paragraph3`: The third paragraph of the blog post (optional).
3.  **Populate Content:** The provided text for the three blog posts will be broken down and used to populate the `postDetails` array.

### Example `postDetails` structure:

```javascript
postDetails: [
  {
    id: 4,
    paragraph1: "Ready to make Etobicoke your home? ...",
    quote: "The current market strongly favors buyers like you...",
    quoteAuthor: "Market Analysis",
    paragraph2: "Maximize your down payment power with smart government programs...",
    paragraph3: "Choose your Etobicoke neighborhood strategically..."
  },
  // ... objects for other posts
]
```

## Phase 2: Update `BlogDetails.jsx` Component

The `BlogDetails.jsx` component will be updated to fetch and display the detailed content for the specific blog post being viewed.

1.  **Fetch Post Details:** The component will receive the post ID from the URL. It will use this ID to find the corresponding object in the `blog.postDetails` array from `siteContent.js`.
2.  **Render Dynamic Content:** The component will be modified to render the content from the fetched post details object. Instead of using the static `detailPlaceholder`, it will now display the `paragraph1`, `quote`, `quoteAuthor`, `paragraph2`, and `paragraph3` from the correct object in the `postDetails` array.

This approach will ensure that each blog post displays its unique, structured content as intended.

## Mermaid Diagram

```mermaid
graph TD
    subgraph data/siteContent.js
        A[blog.posts array]
        B[blog.postDetails array]
    end

    subgraph components/blogs/BlogDetails.jsx
        C{BlogDetails Component}
    end

    A -- Blog Post ID --> C
    B -- Blog Post ID --> C
    C -- Renders --> D[Formatted Blog Post]