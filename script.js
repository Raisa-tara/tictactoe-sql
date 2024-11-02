* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
}

.container {
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    width: 300px;
    margin: 0 auto;
}

.cell {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    background-color: #e9ecef;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.cell:hover {
    background-color: #dee2e6;
}

#reset {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#status {
    margin-top: 15px;
    font-size: 18px;
}
