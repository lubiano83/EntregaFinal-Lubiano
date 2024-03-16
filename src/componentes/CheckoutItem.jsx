/* CheckoutItem */

const CheckoutItem = ({id, cantidad}) => {

    console.log(id, cantidad)

  return (
    <article id="CheckoutItem">
        <input type={`producto(${id})`} name={`producto(${id})`} readOnly value={`Cantidad: ${cantidad}.`}/>
    </article>
  )
}; export default CheckoutItem;
