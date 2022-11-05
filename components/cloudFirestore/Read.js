import { db } from '@/lib/firebase/initFirebase'
import { doc, getDoc } from "firebase/firestore"
import Button from 'react-bootstrap/Button'

const ReadDataFromCloudFirestore = () => {

    return (
        <div style={{ margin: '5px 0' }}>
            <Button onClick={{}} style={{ width: '100%' }}>Read Data From Cloud Firestore</Button>
        </div>
    )
}

export default ReadDataFromCloudFirestore