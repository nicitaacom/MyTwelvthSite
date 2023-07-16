import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'


export function StorePage() {
  return (
    <div className='grid grid-cols-4 gap-4 py-16 px-8'>
      {storeItems.map(item => (
        <div key={item.id}>
          <StoreItem {...item} />
        </div>
      ))
      }
    </div >
  )
}