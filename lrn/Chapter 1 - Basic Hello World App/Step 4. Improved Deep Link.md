# Step 4. Improved Deep Link

This section, we move some of the code into the layout to minimize component interdependency and unnecessary rerenders. If you do not do this, every time the query param changes the selected item, the otheritem component rerenders despite it not being related to the state change.

