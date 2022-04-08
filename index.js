/**
 * 
 * @param {string} data 
 * @returns {string}
 */
export default function base112064(data)
{
    let buffer = Buffer.from(data)
    return buffer.toString('ascii');
}