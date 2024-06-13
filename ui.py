# -*- coding: utf-8 -*-
# @Time    : 2019/5/30 17:48
# @Author  : lyyuoo
# @File    : ui.py
# @Software: PyCharm
# @Desc    : 


#导入qt库
import PyQt5.QtCore
import  PyQt5.QtWidgets



def main():
    app = PyQt5.QtWidgets.QApplication([])

    window = PyQt5.QtWidgets.QWidget()

    window.setWindowTitle('Hello World')

    window.resize(300, 200)

    window.move(100, 100)

    window.show()
 
    app.exec_()






if __name__ == '__main__':
    main()