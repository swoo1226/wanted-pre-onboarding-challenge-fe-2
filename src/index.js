/** Todo
 * @typedef {object} Todo
 * @param {string} id -required
 * @param {string} contents -required
 * @param {boolean} done -required
 * @param {string} category -required
 * @param {Array<string>} [tags] -optional
 */

/** tags
 * @typedef {object} Tags
 * @param {string} name
 */

/** @function CreateTodo
 * @param {string} contents
 * @param {string} category
 * @param {Array<string>} [tags] -optional
 */
function createTodo(contents, category, tags) {}

/** @function readTodo
 * @param {string} id -optional
 */
function readTodo(id) {}

/** @function updateTodo
 * @param {string} id -required
 * @param {string} contents -optional
 * @param {boolean} done -optional
 * @param {string} category -optional
 * @param {Array<string>} [tags] -optional
 */
function updateTodo(id, contents, done, category, tags) {}

/** @function delteTodo
 *
 * @param {string} id -optional
 * @param {Array<string>} [tags] -optional
 */
function deleteTodo(id, tags) {}
