/* CheckoutItem */

const CheckoutItem = ({id, cantidad}) => {

    console.log(id, cantidad)

  return (
    <article id="CheckoutItem">
        <input type={`Id: ${id}`} name={`Id: ${id}`} readOnly value={`Cantidad: ${cantidad}.`}/>
    </article>
  )
}; export default CheckoutItem;
