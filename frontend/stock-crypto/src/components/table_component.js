import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const StockTable = () => {
  const data = useSelector((state) => state.data);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleShowModal = (stock) => {
    setSelectedStock(stock);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const styles = {
    table: {
      width: '100%',
      marginTop: '20px',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <Table striped bordered hover style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock, index) => (
            <tr key={index}>
              <td style={styles.td}>{stock.name}</td>
              <td style={styles.td}>{stock.price}</td>
              <td style={styles.td}>
                <Button
                  style={styles.button}
                  onClick={() => handleShowModal(stock)}
                >
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedStock && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Stock Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Name:</strong> {selectedStock.name}</p>
            <p><strong>Price:</strong> {selectedStock.price}</p>
            <p><strong>Timestamp:</strong> {selectedStock.timestamp}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default StockTable;
